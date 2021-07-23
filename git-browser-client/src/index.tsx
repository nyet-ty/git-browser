import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import { SearchBar } from './components/SearchBar';
import { theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <SearchBar />} />
        </Switch>
      </Router></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);