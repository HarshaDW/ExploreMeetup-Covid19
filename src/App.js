import React, { Component } from "react";
import SelectCountry from "./components/SelectCountry";
import WorldStats from "./components/WorldStats";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes />
      </Router>
    );
  }
}
