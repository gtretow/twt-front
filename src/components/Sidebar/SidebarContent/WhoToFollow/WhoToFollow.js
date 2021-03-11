import React, { useEffect, useState /* , { useContext } */ } from "react";
import axios from "axios";

/* import { UserContext } from "../../../../Context/Provider"; */

import { Container, Avatar, Item, FollowButton, Title } from "./index";

function WhoToFollow() {
  /* const { user } = useContext(UserContext); */
  

  const [users, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  console.log(users);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);

        setUser([...response.data]);
        console.log(response.data)
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Item>
        <Title>Quem seguir</Title>
      </Item>
      <div>
        {users.map((element, idx) => (
          <Item key={idx}>
            <Avatar />

            <strong>{element.name}</strong>
            <span>@usuario</span>

            <FollowButton>Seguir</FollowButton>
          </Item>
        ))}
      </div>
    </Container>
  );
}

export default WhoToFollow;
