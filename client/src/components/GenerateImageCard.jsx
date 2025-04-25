import React, { useState } from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Container = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.yellow};
  border-radius: 20px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  //   object-fit: cover;
  border-radius: 24px;
  color: ${({ theme }) => theme.black + 50};
`;

const GenerateImageCard = ({ src, loading }) => {

  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            loading
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Loading ...
        </>
      ) : (
        <>
          {src ? <Image src={src} /> : <> write a prompt to generate image</>}
        </>
      )}
    </Container>
  );
};

export default GenerateImageCard;
