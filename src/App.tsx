import React from "react";

import Navbar from "./components/Navbar";
import Container from "./ui/Container";
import MainPage from "./components/MainPage";
import StepsContainer from "./ui/StepsContainer";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>
          <MainPage />
          <StepsContainer />
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
