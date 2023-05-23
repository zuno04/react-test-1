// src/App.js
import React from "react";
import GamesList from "./components/GamesList";
import styled from "styled-components";

function App() {
  return (
    <GlobalContainer>
      <AppContainer>
        <GamesList />
      </AppContainer>
    </GlobalContainer>
  );
}

export default App;

const GlobalContainer = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
