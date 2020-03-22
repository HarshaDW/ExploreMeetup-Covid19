import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
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

export default function Cases({ selectedCountry }) {
  const classes = useStyles();

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
                {apiData.results ? apiData.results[0].total_deaths : ''}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      }
    </Grid>
  );
}