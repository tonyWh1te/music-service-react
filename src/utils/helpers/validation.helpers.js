import * as Yup from 'yup';
import { validationMessages } from '../constants';

const { email, password, required } = validationMessages;

const loginSchema = Yup.object({
  email: Yup.string().email(email.format).required(required),
  password: Yup.string().required(required),
});

const signUpSchema = Yup.object({
  email: Yup.string().email(email.format).required(required),
  password: Yup.string().min(8, password.minLength).required(required),
});

export { loginSchema, signUpSchema };
