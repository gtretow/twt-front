import React from "react";

import { Container, SearchWrapper, SearchBar, SearchIcon, Body } from "./index";

function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder="Buscar no twitter"></SearchBar>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{"lorem ipsum dolor ist.".repeat(10)}</p>
      </Body>
    </Container>
  );
}

export default Sidebar;
