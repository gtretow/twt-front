import React from "react";

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./index";

function Tweet() {
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Provi</strong>
            <span>@provi</span>
            <Dot />
            <time>10 de fev</time>
          </Header>
          <Description>Testetesteteste</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>
            <Status>
              <RetweetIcon />
              2000
            </Status>
            <Status>
              <LikeIcon />
              20000
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
