import styled, { css } from "styled-components";

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  Twitter,
  Hash,
  List,
  DotsHorizontalRounded,
} from "../../styles/icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    align-items: flex-start;
  }
  width: 180px;
  
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;
`;

export const MenuButton = styled.button`
  display: inline;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;
  /* a partir do segundo botão */
  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 10rem;
      height: unset;
      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const HashIcon = styled(Hash)`
  ${iconCSS}
`;

export const ListIcon = styled(List)`
  ${iconCSS}
`;
export const DotsIcon = styled(DotsHorizontalRounded)`
  ${iconCSS}
`;

export const Button = styled.button`
  background: var(--twitter);
  padding: 14px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: #2885c9;
  }

  > span {
    color: white;
  }
`;

export const ButtonContainer = styled.div``;
