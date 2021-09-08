import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import logo from 'src/assets/logo.png';
import LoginForm from 'src/components/LoginForm';

const AppHeader = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();

  const changeField = (value, key) => {
    // console.log(value, key);
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
    });
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={changeField}
      />
    </header>
  );
};

export default AppHeader;
