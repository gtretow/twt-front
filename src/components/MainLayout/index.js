import styled, { css } from "styled-components";
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from "../../styles/icons";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 9px 0 9px 13 px;
  border-bottom: 1px solid var(--outline);
  z-index: 2;

  > button {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 20px;
  height: 20px;

  fill: var(--twitter);
`;

export const Bio = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 20px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const RSideBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);
  &:hover &.active{
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
