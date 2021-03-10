import React from "react";

import { Container, SearchWrapper, SearchBar, SearchIcon, Body } from "./index";


import SidebarContent from "./SidebarContent/SidebarContent";
import WhoToFollow from "./SidebarContent/WhoToFollow";



function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchBar placeholder="Buscar no twitter"></SearchBar>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <SidebarContent></SidebarContent>
        <WhoToFollow></WhoToFollow>
      </Body>
    </Container>
  );
}

export default Sidebar;
