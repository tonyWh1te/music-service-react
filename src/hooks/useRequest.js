import { useCallback, useState } from 'react';
import axios from 'axios';
import { API_BASE, PROXY } from '../utils/constants';

const useRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const defaultConfig = {
    method: 'get',
    baseURL: PROXY + API_BASE,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'en',
    },
    data: null,
  };

  const request = useCallback(async (url, config = defaultConfig) => {
    setLoading(true);

    try {
      console.log(url);
      const response = await axios({ url, ...config });

      console.log(response);

      if ('error' in response.data) {
        throw new Error(response.data.error.message);
      }

      setLoading(false);

      return response;
    } catch (error) {
      setLoading(false);

      if (error.response) {
        setError(error.response.data);

        throw new Error(error.response.data, error.response.status, error.response.headers);
      } else if (error.request) {
        setError(error.response.data);

        throw new Error(error.request);
      } else {
        setError(error.message);

        throw new Error(`Error: ${error.message}`);
      }
    }
  }, []);

  return { loading, error, request };
};

export default useRequest;
