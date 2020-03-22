import React, { Fragment, useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useCaseStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function Cases({ selectedCountry }) {
  const classes = useCaseStyles();

  const [apiData, setApiData] = useState(false)
  const [fetchCountry, setFetchCountry] = useState(selectedCountry)
  let URL = ''
  if (selectedCountry === 'ALL') {
    URL = "https://thevirustracker.com/free-api?global=stats"
  } else {
    URL = "https://thevirustracker.com/free-api?countryTotal=" + selectedCountry
  }

  const getData = () => {
    axios
      .get(URL)
      .then(({ data }) => {
        setApiData(data);
        console.log('Axios Data', data)
      });
  }
  useEffect(() => {
    getData()
  }, []);

  if (selectedCountry !== fetchCountry) {
    setFetchCountry(selectedCountry)
    getData()
  }


  return (
    <Grid container spacing={1}>
      <Grid item xs={apiData.results ? 4 : 6}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Confirmed Cases
        </Typography>
            <Typography variant="h5" component="h2">
              {apiData.countrydata ? apiData.countrydata[0].total_cases : ''}
              {apiData.results ? apiData.results[0].total_cases : ''}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={apiData.results ? 4 : 6}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Deaths
        </Typography>
            <Typography variant="h5" component="h2">
              {apiData.countrydata ? apiData.countrydata[0].total_deaths : ''}
              {apiData.results ? apiData.results[0].total_deaths : ''}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {apiData.results &&
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Total Recovered
        </Typography>
              <Typography variant="h5" component="h2">
                {apiData.results ? apiData.results[0].total_recovered : ''}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      }
    </Grid>
  );
}
















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
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/World_blank_map_countries.PNG/640px-World_blank_map_countries.PNG`}></img>
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
                 
                </Grid>
              </Fragment>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
