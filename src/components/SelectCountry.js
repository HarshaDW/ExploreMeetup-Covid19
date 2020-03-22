import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
// import Cases from './Cases'
import WorldMap from "./WorldMap";
import Header from "./Header";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useCaseStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function Cases({ selectedCountry }) {
  const classes = useCaseStyles();

  const [apiData, setApiData] = useState(false);
  const [fetchCountry, setFetchCountry] = useState(selectedCountry);
  let URL = "";
  if (selectedCountry === "ALL") {
    URL = "https://thevirustracker.com/free-api?global=stats";
  } else {
    URL =
      "https://thevirustracker.com/free-api?countryTotal=" + selectedCountry;
  }

  const getData = () => {
    axios.get(URL).then(({ data }) => {
      setApiData(data);
      console.log("Axios Data", data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  if (selectedCountry !== fetchCountry) {
    setFetchCountry(selectedCountry);
    getData();
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={apiData.results ? 4 : 6}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Confirmed Cases
            </Typography>
            <Typography variant="h5" component="h2">
              {apiData.countrydata ? apiData.countrydata[0].total_cases : ""}
              {apiData.results ? apiData.results[0].total_cases : ""}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={apiData.results ? 4 : 6}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              {apiData.countrydata ? apiData.countrydata[0].total_deaths : ""}
              {apiData.results ? apiData.results[0].total_deaths : ""}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {apiData.results && (
        <Grid item xs={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Total Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                {apiData.results ? apiData.results[0].total_deaths : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    padding: (0, 2, 0, 2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dropdown: {
    margin: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "500px"
  }
}));

const countryArr = [
  {
    name: "Sri Lanka",
    code: "LK",
    cood: [80.77, 7.87]
  },
  {
    name: "USA",
    code: "US",
    cood: [-95.71,37.09 ]
  },
  {
    name: "Italy",
    code: "IT",
    cood: [12.5674, 41.8719]
  },
  {
    name: "Spain",
    code: "ES",
    cood: [3.7492,40.463 ]
  },
  {
    name: "Netherlands",
    code: "NL",
    cood: [ 5.2913,52.1326]
  },
  {
    name: "France",
    code: "FR",
    cood: [ 2.2137,46.2276]
  }
];

export default function Dropdown() {
  const classes = useStyles();
  const [country, setCountry] = useState(countryArr[0]);
  const handleChange = event => {
    event.preventDefault();
    setCountry(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <WorldMap selectedCountry={country} />
            <img src={`https://www.countryflags.io/${country.code}/shiny/64.png`}></img>
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
                      <InputLabel id="demo-simple-select-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue="LK"
                        value={country}
                        onChange={handleChange}
                      >
                        {countryArr.map(item => {
                          return (
                            <MenuItem key={item.code} value={item}>
                              {item.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Fragment>
              <Fragment>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Cases selectedCountry={country.code} />
                  </Grid>
                </Grid>
              </Fragment>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
