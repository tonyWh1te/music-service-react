import { createContext, useState } from 'react';

const AuthBoxContext = createContext({
  active: 'login',
  newInitValues: null,
  switchToLogin: () => {},
  switchToSignUp: () => {},
});

const AuthBoxProvider = ({ children }) => {
  const [active, setActive] = useState('login');
  const [newInitValues, setNewInitValues] = useState(null);

  const switchToLogin = (enteredSignUpValues = null) => {
    setNewInitValues(enteredSignUpValues);
    setActive('login');
  };

  const switchToSignUp = () => {
    setActive('signup');
  };

  const contextValue = { switchToLogin, switchToSignUp, newInitValues, active };

  return <AuthBoxContext.Provider value={contextValue}>{children}</AuthBoxContext.Provider>;
};

export { AuthBoxProvider };
export default AuthBoxContext;
