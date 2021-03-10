import React from "react";

import {
  Container,
  Banner,
  Avatar,
  BioInfo,
  Follows,
  LocationIcon,
  CakeIcon,
  PersonIcon,
  EditButton,
} from "./index";

function Timeline() {
  return (
    <div>
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <BioInfo>
          <EditButton >Editar Perfil</EditButton>
          <h1>Provi</h1>
          <h2>@provi</h2>
          <p>Provi Challenge</p>
          <ul>
            <li>
              <LocationIcon />
              São Paulo, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido em 2018
            </li>
          </ul>
          <Follows>
            <span>
              <PersonIcon />
              Seguindo <strong>100</strong>
            </span>
            <span>
              <strong>999999 </strong>
              seguidores
            </span>
          </Follows>
        </BioInfo>
      </Container>
    </div>
  );
}

export default Timeline;
