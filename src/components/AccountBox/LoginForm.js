import { useContext } from 'react';
import { Form } from 'formik';
import { AccountContext } from './AccountBoxContext';
import InputText from '../InputText/InputText';
import './AccountBox.css';

const LoginForm = () => {
  const { switchToSignUp } = useContext(AccountContext);

  return (
    <div className="form__block xl:w-1/2">
      <Form
        className="form__content"
        method="post"
      >
        <div className="form__inputs-item mb-14">
          <InputText
            className="form__input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Mail"
          />
        </div>
        <div className="form__inputs-item mb-14">
          <InputText
            className="form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="form__btn animation-main"
          type="submit"
        >
          Login
        </button>
        <p className="form_text">
          Don't have an account?{' '}
          <button
            className="font-bold"
            type="button"
            onClick={switchToSignUp}
          >
            Sign up
          </button>
        </p>
      </Form>
    </div>
  );
};

export default LoginForm;
