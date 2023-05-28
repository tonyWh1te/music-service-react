import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { AccountContext } from './AccountBoxContext';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const PWD_REGEX = /^[\w\dа-яА-Я]+$/;

const loginSchema = Yup.object({
  email: Yup.string().email('Incorrect email format').required('Required field!'),
  password: Yup.string().required('Required field!'),
});

const signUpSchema = Yup.object({
  email: Yup.string().email('Incorrect email format').required('Required field!'),
  name: Yup.string().min(2, 'The minimum number of characters is 2!').matches(PWD_REGEX, 'Only letters and numbers!').required('Required field!!'),
  password: Yup.string().min(8, 'The minimum number of characters is 8!').required('Required field!'),
  date: Yup.date().required('Required field!').max(new Date(), "You can't be born in the future!"),
});

const AccountBox = () => {
  const [active, setActive] = useState('login');
  const [signUpValues, setSignUpValues] = useState({ email: '', name: '', password: '', date: '', gender: 'Male' });

  const switchToLogin = (enteredSignUpValues) => {
    setSignUpValues(enteredSignUpValues);
    setActive('login');
  };

  const switchToSignUp = () => {
    setActive('signup');
  };

  const contextValue = { switchToLogin, switchToSignUp };

  return (
    <AccountContext.Provider value={contextValue}>
      {active === 'login' && (
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
          }}
        >
          <LoginForm />
        </Formik>
      )}
      {active === 'signup' && (
        <Formik
          initialValues={{ ...signUpValues }}
          validationSchema={signUpSchema}
          onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
        >
          <SignUpForm />
        </Formik>
      )}
    </AccountContext.Provider>
  );
};

export { AccountBox };
