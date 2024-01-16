import { useCallback, useState } from 'react';
import axios from 'axios';
import {
  DEV_API_MUSIC_PATH,
  PROD_API_MUSIC_PATH,
  PROXY,
} from '../utils/constants';

const useRequest = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseURL =
    process.env.NODE_ENV === 'production'
      ? `${PROXY}${encodeURIComponent(PROD_API_MUSIC_PATH)}`
      : DEV_API_MUSIC_PATH;

  const defaultConfig = {
    method: 'get',
    baseURL,
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

      if (Object.is(response.data) && 'error' in response.data) {
        throw new Error(response.data.error.message);
      }

      setLoading(false);

      return response;
    } catch (error) {
      setLoading(false);

      if (error.response) {
        setError(error.response.data);

        throw new Error(
          error.response.data,
          error.response.status,
          error.response.headers
        );
      } else if (error.request) {
        setError(error.request);

        throw new Error(error.request);
      } else {
        setError(error.message);

        throw new Error(`Error: ${error.message}`);
      }
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};

export default useRequest;
