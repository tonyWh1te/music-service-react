import { useContext } from 'react';
import { Formik } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FormView from './FormView';
import AuthBoxContext from '../../../context/AuthBoxProvider';
import { signUpSchema } from '../../../utils/helpers/validation.helpers';

const SignUpForm = () => {
  const { onSwitchForm } = useContext(AuthBoxContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    const auth = getAuth();

    let statusMessage = '';

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        onSwitchForm('login');
      })
      .catch((error) => {
        if (error?.customData._tokenResponse) {
          const message = error.customData._tokenResponse.error.message;

          if (message === 'EMAIL_EXISTS') {
            statusMessage = 'Email already exists.';
          }
        } else {
          statusMessage = 'Something went wrong(((';
        }
      })
      .finally(() => {
        resetForm({ values: initialValues, status: statusMessage });
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => <FormView formikProps={formikProps} />}
    </Formik>
  );
};

export default SignUpForm;
