import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SelectCountry from "../SelectCountry";
import WorldStats from "../WorldStats";
import history from './history';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SelectCountry} />
          <Route path="/selectCountry" component={SelectCountry} />
          <Route path="/worldStats" component={WorldStats} />
        </Switch>
      </Router>
    )
  }
}