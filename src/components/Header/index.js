import React from "react";
import { Container, HeaderTitle, HeaderIcon } from "./styles";

function Header() {
  return (
    <Container>
      <HeaderIcon>
        <span>✅</span>
      </HeaderIcon>
      <HeaderTitle>ToDo App</HeaderTitle>
    </Container>
  );
}

export default Header;
