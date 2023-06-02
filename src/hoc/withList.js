import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const withList = (Component, getData) => {
  return (props) => {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getData().then(onListLoaded).catch(onError);
    }, []);

    const onListLoaded = ({ data }) => {
      setList(data);
      setLoading(false);
    };

    const onError = () => {
      setError(true);
      setLoading(false);
    };

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner =
      !error && loading ? (
        <TailSpin
          height="64"
          width="64"
          ariaLabel="tail-spin-loading"
          radius="1"
          color="#1AB26B"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClass=""
          visible={true}
        />
      ) : null;

    return (
      <Component
        {...props}
        errorMessage={errorMessage}
        loading={spinner}
        list={list}
      />
    );
  };
};

export default withList;
