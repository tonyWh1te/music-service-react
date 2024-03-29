import MusicService from '../service/MusicService.service';
import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const withContent = (Component, requestMethodInfo) => {
  return (props) => {
    const [list, setList] = useState(null);

    const musicService = new MusicService();

    const { error, loading } = musicService.http;

    useEffect(() => {
      let isCancelled = false;
      const { methodName, methodParams = [] } = requestMethodInfo;

      if (typeof musicService[methodName] === 'function') {
        musicService[methodName](...methodParams).then(({ data }) => {
          if (!isCancelled) {
            setList(data);
          }
        });
      }

      return () => {
        isCancelled = true;
      };
    }, [requestMethodInfo]);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? (
      <TailSpin
        height="64"
        width="64"
        ariaLabel="tail-spin-loading"
        radius="1"
        color="#1AB26B"
        wrapperClass="spinner"
        visible={true}
      />
    ) : null;

    return (
      <Component
        {...props}
        errorMessage={errorMessage}
        spinner={spinner}
        list={list}
      />
    );
  };
};

export default withContent;
