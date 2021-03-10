import React from "react";

import { Container, Item, Title } from "./index";

const elements = ['teste', 'teste','teste'];

function SidebarContent() {
  return (
    <Container>
      <Item>
        <Title>Tendencias do Brasil</Title>
      </Item>
      {elements.map((element, idx) => (
        <Item key={idx}>{element}</Item>
      ))}
    </Container>
  );
}

export default SidebarContent;
