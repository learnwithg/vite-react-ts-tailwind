import React from "react";

import Navbar from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Collections from "./components/Collections";
import Account from "./components/Account";
import Register from "./components/Register";
import Footer from "./components/Footer";

import Navigation from "./UI/Navigation";

import Container from "./UI/Container";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <Navigation /> */}
      <Container>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/homepage"></Redirect>
          </Route>
          <Route path="/homepage" exact>
            <Home />
          </Route>
          <Route path="/collections/all" exact>
            <AllProducts />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/account" exact>
            <Account />
          </Route>
          <Route path="/account/register">
            <Register />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
