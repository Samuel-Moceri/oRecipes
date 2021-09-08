/*
  Objectif : gérer une authentification -> une connexion
  - il faut gérer des champs controlés pour l'email et le mdp pour avoir les infos dans le state
  - à la soumission du form on va traduire l'intention de se connecter dans un middleware
    - poser un écouteur au submit
    - passer la foncion capable de dispatcher via les props
      pour garder les branchements hors de LoginForm
    - dispatcher une action au submit
    - créer le middleware
    - le donner au store
    - traduire l'action dans le middleware cf étape suivante
  - dans le middleware on va faire l'appel à l'api pour envoyer le couple email/mdp
  - en fonction de la réponse de l'api on passera notre une info de le state
    à true pour dire qu'on est connecté
  - on va brancher nos composants en lecture via le hook de react-redux useSelector
    pour récupérer l'info du state et la représenter
*/

import PropTypes from 'prop-types';

import Field from './Field';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    console.log('maintenant je veux dispatcher');
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
