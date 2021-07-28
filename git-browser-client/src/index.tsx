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
import { RepositoryList } from './components/RepositoryList';
import { ReadMe } from './components/ReadMe';
import { Layout } from './components/Layouts/Layout';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={() => (
            <Layout>
              <SearchBar />
            </Layout>
          )} />
          <Route exact path="/:username" component={() => (
            <Layout>
              <RepositoryList />
            </Layout>
          )} />
          <Route exact path="/:username/:repository" component={() => (
            <Layout>
              <ReadMe />
            </Layout>
          )} />
        </Switch>
      </Router></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);