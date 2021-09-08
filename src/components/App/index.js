import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';
import { fetchRecipes } from '../../actions/recipes';

import './style.scss';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // ici j'utilise un action creator qui est tout simplement
    // une fonction qui retourne l'objet action
    // je dispatche cet objet action
    dispatch(fetchRecipes());
  }, []);

  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/recipe/:slug" exact>
          <Recipe />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>

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
