import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Cases from './Cases'
import WorldMap from './WorldMap'
import Header from './Header'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '500px'
  },
}));

export default function WorldStats() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <WorldMap />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div>
              <Fragment>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="h4"> World Stats</Typography>
                  </Grid>
                </Grid>
              </Fragment>
              <Fragment>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Cases selectedCountry={'ALL'} />
                  </Grid>
                  <WorldMap selectedCountry={'ALL'} />
                </Grid>
              </Fragment>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
