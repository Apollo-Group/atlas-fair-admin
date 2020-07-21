import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sign from "../pages/Sign";
import Home from '../pages/Home'
import About from '../pages/About'
import Exhibitors from '../pages/Exhibitors'
import Agenda from '../pages/Agenda'
import Banners from '../pages/Banners'
import Speeches from '../pages/Speeches'
import Workshops from '../pages/Workshops'
import Sponsors from '../pages/Sponsors'
import Visitors from '../pages/Visitors'
import FAQ from '../pages/FAQ'
import Spaces from '../pages/Space'

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
        <Route exact path="/informations">
          <About />
        </Route>
        <Route exact  path="/exhibitors">
          <Exhibitors />
        </Route>
        <Route exact path="/agendas">
          <Agenda />
        </Route>
        <Route exact path="/banners">
          <Banners />
        </Route>
        <Route exact  path="/speeches">
          <Speeches />
        </Route>
        <Route exact path="/workshops">
          <Workshops />
        </Route>
        <Route exact path="/sponsors">
          <Sponsors />
        </Route>
        <Route exact  path="/visitors">
          <Visitors />
        </Route>
        <Route exact  path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/spaces">
          <Spaces />
        </Route>
      </Switch>
    </Router>
  );
}
