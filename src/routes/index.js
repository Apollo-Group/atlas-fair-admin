import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sign from "../pages/Sign";
import Home from '../pages/Home'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sign />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
