import React from "react";
import {
  Container,
  UpperLevel,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Button,
  HashIcon,
  ListIcon,
  DotsIcon,
} from "./index";

const Navbar = () => {
  return (
    <Container>
      <UpperLevel>
        <Logo src="../../img/twitter.png" />
        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>
        <MenuButton>
          <HashIcon />
          <span>Explorar</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Itens salvos</span>
        </MenuButton>
        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>
        <MenuButton>
          <DotsIcon />
          <span>Mais</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </UpperLevel>
    </Container>
  );
};

export default Navbar;
