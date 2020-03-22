import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorldMap from './WorldMap'
import SelectCountry from './SelectCountry'
import WorldStats from './WorldStats'
import Header from './Header'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Page() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <SelectCountry />
    </React.Fragment>
  );
}