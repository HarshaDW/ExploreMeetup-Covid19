import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SelectCountry from "./components/SelectCountry";
import WorldStats from "./components/WorldStats";

export default class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={SelectCountry} />
          <Route path="/selectCountry" component={SelectCountry} />
          <Route path="/worldStats" component={WorldStats} />
        </Switch>

    )
  }
}