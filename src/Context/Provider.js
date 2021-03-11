import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

function UserContextComponent(props) {
  const [user, setUser] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);

        setUser([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  
  return (
    <UserContext.Provider value={{ user: user }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextComponent;
