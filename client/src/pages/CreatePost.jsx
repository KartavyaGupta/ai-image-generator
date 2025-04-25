import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GenerateImageCard from "../components/GenerateImageCard";
const Container = styled.div`
  height: 100%;
  background:${({ theme }) => theme.bg}
  background: red;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  height: 100%;
  flex: 1;
`;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          createPostLoading={createPostLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          generateImageLoading={generateImageLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GenerateImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
