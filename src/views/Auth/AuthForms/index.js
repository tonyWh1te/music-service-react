import { useState } from 'react';
import { AuthBoxContext } from '../../../context/AuthBoxContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForms = () => {
  const [active, setActive] = useState('login');
  const [newInitValues, setNewInitValues] = useState(null);

  const switchToLogin = (enteredSignUpValues) => {
    setNewInitValues(enteredSignUpValues);
    setActive('login');
  };

  const switchToSignUp = () => {
    setActive('signup');
  };

  const contextValue = { switchToLogin, switchToSignUp, newInitValues };

  return (
    <AuthBoxContext.Provider value={contextValue}>
      {active === 'login' && <LoginForm />}
      {active === 'signup' && <SignUpForm />}
    </AuthBoxContext.Provider>
  );
};

export { AuthForms };
