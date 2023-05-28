import { useContext } from 'react';
import { Form, Field, useFormikContext } from 'formik';
import { AuthBoxContext } from '../../../context/AuthBoxContext';
import InputText from '../../../components/InputText/InputText';
import './AuthForms.css';

const SignUpForm = () => {
  const { switchToLogin } = useContext(AuthBoxContext);
  const { values } = useFormikContext();

  return (
    <div className="form__block lg:px-28 xl:w-3/4 2xl:w-7/12">
      <Form
        className="form__content"
        method="post"
      >
        <div className="form__inputs">
          <div className="form__inputs-item">
            <InputText
              className="form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Mail"
            />
          </div>
          <div className="form__inputs-item">
            <InputText
              className="form__input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter a profile name"
            />
          </div>
          <div className="form__inputs-item">
            <InputText
              className="form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Create a Password"
            />
          </div>
          <div className="form__inputs-item">
            <InputText
              className="form__input"
              type="date"
              name="date"
              id="date"
            />
          </div>
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
        >
          Sign up
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
  );
};

export default SignUpForm;
