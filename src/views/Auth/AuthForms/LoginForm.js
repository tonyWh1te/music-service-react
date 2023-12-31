import { useAuth } from '../../../hooks';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormView from './FormView';
import { loginSchema } from '../../../utils/helpers/validation.helpers';

const LoginForm = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state.from?.pathname || '/home';

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    const auth = getAuth();

    let statusMessage = '';

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;

        login(
          {
            user: { email: user.email, id: user.uid, token: user.accessToken },
          },
          () => {
            navigate(from, { replace: true });
          }
        );
      })
      .catch((error) => {
        statusMessage = 'Invalid user name or password.';
      })
      .finally(() =>
        resetForm({ values: initialValues, status: statusMessage })
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => <FormView formikProps={formikProps} />}
    </Formik>
  );
};

export default LoginForm;
