import { useContext } from 'react';
import { useAuth } from '../../../hooks';
import { Formik, Form } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import UserService from '../../../service/UserService.service';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import { loginSchema } from '../../../utils/helpers/validation.helpers';
import InputText from '../../../components/InputText/InputText';
import './AuthForms.css';

const InnerForm = ({ formikProps, switchToSignUp }) => {
  const { isSubmitting, handleSubmit, status, setStatus } = formikProps;

  const showErrorMessage = (message) => {
    setTimeout(() => setStatus(undefined), 3000);

    return <div className="bg-red-800 rounded-sm mt-3 p-3 font-semibold">{message}</div>;
  };

  return (
    <>
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
            onSubmit={handleSubmit}
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
      {status && status.error ? showErrorMessage(status.error) : null}
    </>
  );
};

const LoginForm = () => {
  const { switchToSignUp } = useContext(AuthBoxContext);

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/home';

  const userService = new UserService();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    let statusMessage = {};

    try {
      const res = await userService.loginUser(values);

      login({ user: res.data }, () => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      statusMessage = { error: error.message };
    } finally {
      resetForm({ values: initialValues, status: statusMessage });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <InnerForm
          formikProps={formikProps}
          switchToSignUp={switchToSignUp}
        />
      )}
    </Formik>
  );
};

export default LoginForm;
