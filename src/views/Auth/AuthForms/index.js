import { useContext } from 'react';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForms = () => {
  const { active } = useContext(AuthBoxContext);

  return (
    <>
      {active === 'login' && <LoginForm />}
      {active === 'signup' && <SignUpForm />}
    </>
  );
};

export { AuthForms };
