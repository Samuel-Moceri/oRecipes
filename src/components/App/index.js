import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/recipe/:slug" exact>
        <Recipe />
      </Route>

      <Route>
        <Error />
      </Route>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
