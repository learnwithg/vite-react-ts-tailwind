import React from "react";

import Navbar from "./components/Navbar";
import Container from "./ui/Container";
import HeaderPage from "./components/HeaderPage";
import StepsContainer from "./ui/StepsContainer";
import FormsContainer from "./components/FormsContainer";

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>
          <HeaderPage />
          <div className="w-100 h-0.5 bg-orange-400 mb-8"></div>
          <StepsContainer />
          <FormsContainer />
        </main>
      </Container>
    </React.Fragment>
  );
}

export default App;
