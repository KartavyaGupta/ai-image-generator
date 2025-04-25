import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import FileSaver from "file-saver";
import DownloadIcon from "@mui/icons-material/Download";
const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 90};
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 90};
    transform: scale(1.05);
  }
  cursor: pointer;
  transition: all 0.3s ease;
`;
const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  gap: 2px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  ${Card}:hover & {
    opacity: 1;
  }
  border-radius: 6px;
  justify-content: space-between;
  padding: 12px;
  &:hover {
    transform: scale(1.05);
  }
`;
const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const ImageCard = ({ item }) => {
  return (
    <Card>
      <LazyLoadImage
        style={{ width: "340px", height: "340px" }}
        src={item.photo}
      />
      <HoverOverlay>
        <Prompt>{item.prompt} </Prompt>
        <Author>
          <Avatar sx={{ width: "32px", height: "32px" }}>
            {item.author[0]}
          </Avatar>
          {item.author}
          <DownloadIcon
            onClick={() => {
              FileSaver.saveAs(item?.photo, "download.jpg");
            }}
          />
        </Author>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
