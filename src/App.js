import React from "react";

import Home from "./components/Home/Home";

import { UserContext } from "./Context/Provider";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <UserContext.Provider>
        <GlobalStyle />
        <Home></Home>
      </UserContext.Provider>
    </>
  );
}

export default App;
