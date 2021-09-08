import axios from 'axios';
import { FETCH_RECIPES } from '../actions/recipes';

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_RECIPES) {
    // console.log('appel API');

    axios.get('http://localhost:3001/recipes')
      .then((response) => {
        // handle success
        console.log(response.data);
        store.dispatch({
          type: 'SAVE_RECIPES',
          recipes: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }
  else if (action.type === 'LOGIN') {
    console.log('appel de l\'API');
  }
  next(action);
};

export default ajax;
