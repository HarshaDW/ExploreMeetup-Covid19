import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Public from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';
import history from './utils/history';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Public className={classes.icon} />
          <Typography variant="h6" color="inherit" className={classes.title}>
            Covid-19 Tracker
          </Typography>
          <Button color="inherit" onClick={() => history.push('/SelectCountry')}>By Country</Button>
          <Button color="inherit" onClick={() => history.push('/WorldStats')}>World Stats</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
