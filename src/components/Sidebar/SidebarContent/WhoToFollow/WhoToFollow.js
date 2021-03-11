import React from "react";

import { Container, Avatar, Item, FollowButton, Title } from "./index2";
const elements = ["teste", "teste", "teste"];

function WhoToFollow() {
  return (
    <Container>
      <Item>
        <Title>Quem seguir</Title>
      </Item>
      <div>
        {elements.map((element, idx) => (
          <Item key={idx}>
            <Avatar />
            <strong>{element}</strong>
            <span>APELIDO</span>
            <FollowButton>Seguir</FollowButton>
          </Item>
        ))}
      </div>
    </Container>
  );
}

export default WhoToFollow;
