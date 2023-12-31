import { useContext } from 'react';
import { Form } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import InputText from '../../../components/InputText/InputText';
import Button from '../../../components/Button/Button';
import './AuthForms.css';

const inputFields = [
  {
    type: 'email',
    name: 'email',
    id: 'email',
    placeholder: 'Enter Your Mail',
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Enter a Password',
  },
];

const showErrorMessage = (message) => {
  return (
    <div className="bg-red-800 rounded-sm mt-3 p-3 font-semibold">
      {message}
    </div>
  );
};

const FormView = ({ formikProps }) => {
  const { isSubmitting, handleSubmit, status, setStatus } = formikProps;

  const { activeForm, onSwitchForm } = useContext(AuthBoxContext);

  const isLogin = activeForm === 'login';

  const titleButton = isLogin ? 'Login' : ' Sign up';
  const titleSwitchButton = isLogin ? 'Register' : 'Login';
  const oppositeFormText = isLogin
    ? "Don't have an account?"
    : 'Already have an account?';

  const isLoading = isSubmitting ? (
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
    titleButton
  );

  const onClick = (active) => {
    return () => onSwitchForm(active);
  };

  const errorHandling = () => {
    setTimeout(() => setStatus(undefined), 3000);
    return showErrorMessage(status);
  };

  return (
    <>
      <div className="form__block xl:w-1/2">
        <Form
          className="form__content"
          method="post"
        >
          {inputFields.map(({ type, name, id, placeholder }, i) => (
            <div
              key={i}
              className="form__inputs-item mb-14"
            >
              <InputText
                className="form__input"
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
              />
            </div>
          ))}
          <Button
            className="form__btn button__primary"
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isLoading}
          </Button>
          <p className="form_text">
            {oppositeFormText}{' '}
            <button
              className="font-bold"
              type="button"
              onClick={onClick(isLogin ? 'signup' : 'login')}
            >
              {titleSwitchButton}
            </button>
          </p>
        </Form>
      </div>
      {status ? errorHandling() : null}
    </>
  );
};

export default FormView;
