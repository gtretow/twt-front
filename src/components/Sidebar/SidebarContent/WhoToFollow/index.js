import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--search);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid var(--outline);
  }

  &:first-child {
    padding-top: 14px;
  }
  &:last-child {
    padding-bottom: 16px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
  align-items: center;
`;

export const FollowButton = styled.button`
  background: transparent;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  padding: 6px 17px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;
