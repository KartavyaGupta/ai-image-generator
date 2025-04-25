import React from "react";
import styled from "styled-components";
import Button from "./buttons/button.js";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const Container = styled.div`
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      GenAI
      {path[1] == "post" ? (
        <Button
          text="explore posts"
          leftIcon={<ExploreRounded />}
          onClick={() => navigate("/")}
          type={"secondary"}
        ></Button>
      ) : (
        <Button
          text="create new post"
          leftIcon={<AddRounded />}
          onClick={() => navigate("/post")}
        ></Button>
      )}
    </Container>
  );
};

export default Navbar;
