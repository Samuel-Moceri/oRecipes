/* eslint-disable arrow-body-style */
// == Import : npm
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

import { findRecipe } from 'src/selectors/recipes';

// Style
import './style.scss';

// == Composant
function Recipe() {
  const recipes = useSelector(state => findRecipe(state.recipes.list, 'crepes-raffinees'));

  if (!recipe) {
    return <Redirect to="/error" />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;