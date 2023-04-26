import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
const Container = styled(AppBar)({
    backgroundColor:"black",
    borderRadius:'1rem 1rem 0 0'
})
const Header = () => {
  return (
    <>
      <Container position='sticky' >
        <Toolbar>Code Editor</Toolbar>
      </Container>
    </>
  );
};

export default Header;
