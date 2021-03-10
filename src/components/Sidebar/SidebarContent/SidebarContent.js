import React from "react";

import { Container, Item, Title } from "./styles";

const elements = [];

function SidebarContent() {
  return (
    <Container>
      <Item>
        <Title />
      </Item>
      {elements.map((element, idx) => (
        <Item key={idx}>{element}</Item>
      ))}
    </Container>
  );
}

export default SidebarContent;
