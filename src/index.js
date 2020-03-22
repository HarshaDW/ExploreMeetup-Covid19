import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utils/Routes';

ReactDOM.render(
  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>, document.getElementById('root'));

serviceWorker.unregister();
