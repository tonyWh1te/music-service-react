import * as Yup from 'yup';
import { PWD_REGEX, validationMessages } from '../constants';

const { name, email, password, dateOfBirth, required } = validationMessages;

const loginSchema = Yup.object({
  email: Yup.string().email(email.format).required(required),
  password: Yup.string().required(required),
});

const signUpSchema = Yup.object({
  email: Yup.string().email(email.format).required(required),
  name: Yup.string().min(2, name.minLength).matches(PWD_REGEX, name.format).required(required),
  password: Yup.string().min(8, password.minLength).required(required),
  date: Yup.date().required(required).max(new Date(), dateOfBirth.validDate),
});

export { loginSchema, signUpSchema };
