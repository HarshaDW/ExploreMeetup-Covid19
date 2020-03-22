import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Cases from './Cases'
import WorldMap from './WorldMap'
import Header from './Header'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
    padding: (0, 2, 0, 2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropdown: {
    margin: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '500px'
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [country, setCountry] = useState('LK');
  const handleChange = event => {
    event.preventDefault()
    setCountry(event.target.value);
  };

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
                    <Typography variant="h4"> By Country</Typography>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Country</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue='LK'
                        value={country}
                        onChange={handleChange}
                      >
                        <MenuItem value={'LK'}>LK</MenuItem>
                        <MenuItem value={'US'}>USA</MenuItem>
                        <MenuItem value={'IT'}>ITALY</MenuItem>
                        <MenuItem value={'FR'}>FRANCE</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Fragment>
              <Fragment>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Cases selectedCountry={country} />
                  </Grid>
                  <WorldMap selectedCountry={country} />
                </Grid>
              </Fragment>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
