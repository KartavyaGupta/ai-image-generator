import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./buttons/button.js";
import TextInput from "./Input/TextInput.jsx";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CreateIcon from "@mui/icons-material/Create";
import { CreatePost, GenerateAIImage } from "../api/index.js";
const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setGenerateImageLoading,
  generateImageLoading,
  setCreatePostLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAIImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  const createPostFun = async () => {
    setCreatePostLoading(true);
    console.log("post is ", post);
    await CreatePost(post)
      .then(() => {
        console.log("idhar to aa gaye");
        setCreatePostLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
      });
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Write your prompt according to the image you want</Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.author}
          handelChange={(e) => setPost({ ...post, author: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the iamge"
          textArea={true}
          rows={8}
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        ** You can post the ai generated image to the community
      </Body>
      <Actions>
        <Button
          text="generate image"
          flex
          leftIcon={<AutoAwesomeIcon />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="post image"
          flex
          type="secondary"
          leftIcon={<CreateIcon />}
          isLoading={createPostLoading}
          isDisabled={
            post.author === "" || post.prompt === "" || post.photo === ""
          }
          onClick={() => createPostFun()}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
