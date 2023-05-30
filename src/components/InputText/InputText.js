import { useField } from 'formik';
import './InputText.css';

const InputText = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <>
      <input
        {...props}
        {...field}
      />
      {meta.error && meta.touched ? <span className="form__input-error">{meta.error}</span> : null}
    </>
  );
};

export default InputText;
