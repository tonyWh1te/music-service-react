import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import UserService from '../../../service/UserService.service';
import AuthBoxContext from '../../../context/AuthBoxContext';
import { signUpSchema } from '../../../utils/helpers/validation.helpers';
import InputText from '../../../components/InputText/InputText';
import './AuthForms.css';

const InnerForm = ({ formikProps, switchToLogin }) => {
  const inputFields = [
    {
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'Enter Your Mail',
    },
    {
      type: 'text',
      name: 'name',
      id: 'name',
      placeholder: 'Enter a profile name',
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeholder: 'Create a Password',
    },
    {
      type: 'date',
      name: 'date',
      id: 'date',
    },
  ];

  const { values, isSubmitting, handleSubmit, status, setStatus } = formikProps;

  const showErrorMessage = (message) => {
    setTimeout(() => setStatus(undefined), 3000);

    return <div className="bg-red-800 rounded-sm mt-3 p-3 font-semibold">{message}</div>;
  };

  return (
    <>
      <div className="form__block lg:px-28 xl:w-3/4 2xl:w-7/12">
        <Form
          className="form__content"
          method="post"
        >
          <div className="form__inputs">
            {inputFields.map(({ type, name, id, placeholder }, i) => (
              <div
                key={i}
                className="form__inputs-item"
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
          </div>
          <div className="form__select-block">
            <label
              className="form__label"
              htmlFor="gender"
            >
              Gender
            </label>
            <Field
              className="form__select"
              name="gender"
              id="gender"
              as="select"
            >
              <option
                className="bg-gray-form"
                value="male"
              >
                Male
              </option>
              <option
                className="bg-gray-form"
                value="female"
              >
                Female
              </option>
            </Field>
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
              'Sign up'
            )}
          </button>
          <p className="form_text">
            Already have an account?{' '}
            <button
              className="font-bold"
              type="button"
              onClick={() => switchToLogin(values)}
            >
              Login
            </button>
          </p>
        </Form>
      </div>
      {status && status.error ? showErrorMessage(status.error) : null}
    </>
  );
};

const SignUpForm = () => {
  const { switchToLogin, newInitValues } = useContext(AuthBoxContext);

  const initialValues = { email: '', name: '', password: '', date: '', gender: 'Male' };

  const userService = new UserService();

  const onSubmit = async (values, { resetForm }) => {
    let statusMessage = {};

    try {
      const result = await userService.registerUser(values);

      console.log(result.message);
      switchToLogin();
    } catch (error) {
      statusMessage = { error: error.message };
    } finally {
      resetForm({ values: initialValues, status: statusMessage });
    }
  };

  return (
    <Formik
      initialValues={newInitValues || initialValues}
      validationSchema={signUpSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => (
        <InnerForm
          formikProps={formikProps}
          switchToLogin={switchToLogin}
        />
      )}
    </Formik>
  );
};

export default SignUpForm;
