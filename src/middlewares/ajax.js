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
    // on va vouloir envoyer l'email et le mot de passe à l'api pour s'authentifier
    // ils sont dans le state, donc je récupère le state puisque j'ai accès au store
    const state = store.getState();
    // on fait l'appel à l'api
    axios.post('http://localhost:3001/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        console.log('reaction en cas de succès');
      })
      .catch((error) => {
        console.error(error);
        alert('Authentification échouée');
      });
  }
  next(action);
};

export default ajax;
