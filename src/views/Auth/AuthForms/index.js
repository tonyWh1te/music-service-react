import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthForm = () => {
  const { onSwitchForm, activeForm } = useContext(AuthBoxContext);
  const location = useLocation();

  useEffect(() => {
    const active = location.state?.activeForm || 'login';

    onSwitchForm(active);
  }, []);

  return <>{activeForm === 'login' ? <LoginForm /> : <SignUpForm />}</>;
};

export { AuthForm };
