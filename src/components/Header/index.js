import React from "react";
import { Container, HeaderTitle, HeaderIcon } from "./styles";

function Header() {
  return (
    <Container>
      <HeaderIcon>
        <span>✅</span>
      </HeaderIcon>
      <HeaderTitle>To Do App</HeaderTitle>
    </Container>
  );
}

export default Header;
