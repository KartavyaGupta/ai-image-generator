// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/searchBar/SearchBar";
import { GetPosts } from "../api";
import { CircularProgress } from "@mui/material";
import Masonry from "@mui/lab/Masonry"; // ⟵ NEW
import ImageCard from "../components/ImageCard/ImageCard";

const Container = styled.div`
  padding: 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.background};
`;

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;
`;

// Masonry doesn’t need extra styling, but you can wrap/extend it if you like:
const MasonryGrid = styled(Masonry)`
  width: 100%;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await GetPosts();
      setPosts(res?.data?.data);
      setFilteredPost(res?.data?.data);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPost(posts);
      return;
    }
    const lower = search.toLowerCase();
    const filtered = posts.filter(
      (p) =>
        p?.prompt?.toLowerCase().includes(lower) ||
        p?.author?.toLowerCase().includes(lower)
    );
    setFilteredPost(filtered);
  }, [posts, search]);

  return (
    <Container>
      <HeadLine>
        Explore popular posts in the Community!
        <Span>⦾ Generated with AI ⦾</Span>
      </HeadLine>

      <SearchBar
        search={search}
        handleChange={(e) => setSearch(e.target.value)}
      />

      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}

        {loading ? (
          <CircularProgress />
        ) : filteredPost.length ? (
          <MasonryGrid
            columns={{ xs: 2, sm: 3, lg: 4 }} // responsive column counts
            spacing={2} // gap in px
          >
            {filteredPost
              .slice() // keep original order intact
              .reverse() // newest first
              .map((item, i) => (
                <ImageCard key={i} item={item} />
              ))}
          </MasonryGrid>
        ) : (
          <>No Posts Found !!</>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;
