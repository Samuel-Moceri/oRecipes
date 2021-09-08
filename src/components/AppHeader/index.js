import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import logo from 'src/assets/logo.png';
import LoginForm from 'src/components/LoginForm';

const AppHeader = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
      // en es6 quand on met une propriété qui a pour valeur
      // la valeur d'une variable possédant le meme nom que la clé on peut abréger
      // value,
      // key,
    });
  };

  const login = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={changeField}
        handleLogin={login}
      />
    </header>
  );
};

export default AppHeader;
