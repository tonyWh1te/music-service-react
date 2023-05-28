import { useField } from 'formik';
import './InputText.css';

const InputText = ({ ...props }) => {
  const [field, meta] = useField(props);

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
