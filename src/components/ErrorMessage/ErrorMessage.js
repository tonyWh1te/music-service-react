import { errorImg } from '../../assets';

const ErrorMessage = () => {
  return (
    <img
      className="m-auto"
      src={errorImg}
      alt="error"
    />
  );
};

export default ErrorMessage;
