import { useContext } from 'react';
import { Formik, Form } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import UserService from '../../../service/UserService.service';
import { AuthBoxContext } from '../../../context/AuthBoxContext';
import { loginSchema } from '../../../utils/helpers/validation.helpers';
import InputText from '../../../components/InputText/InputText';
import './AuthForms.css';

const LoginForm = () => {
  const { switchToSignUp } = useContext(AuthBoxContext);

  return (
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
      {({ isSubmitting }) => (
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <TailSpin
                  height="32"
                  width="32"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  color="#ffff"
                  wrapperStyle={{ justifyContent: 'center' }}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                'Login'
              )}
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
      )}
    </Formik>
  );
};

export default LoginForm;
