import React from "react";
import { Route } from "react-router";

const Collections: React.FC = () => {
  return (
    <div>
      Collections
      <Route path="/collections/all">
        <h1>All Products</h1>
      </Route>
    </div>
  );
};

export default Collections;
