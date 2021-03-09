import React from "react";
import { Nav, Button, Links } from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <Links href="#">Página Inicial</Links>
      <Links href="#">Explorar</Links>
      <Links href="#">Notificações</Links>
      <Links href="#">Mensagens</Links>
      <Links href="#">Itens salvos</Links>
      <Links href="#">Listas</Links>
      <Links href="#">Perfil</Links>
      <Links href="#">Mais</Links>

      <Button>Tweetar</Button>
    </Nav>
  );
};

export default Navbar;
