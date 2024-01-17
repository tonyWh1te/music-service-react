import { useRequest } from '../hooks';

class UserService {
  http = useRequest();

  #baseConfig = {
    baseURL: `https://${process.env.REACT_APP_MOKKY_DEV_ID_PROJECT}.mokky.dev`,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  #transformFavorites = (transformObj, curValue) => {
    const { type, deezerId, ...otherProps } = curValue;
    const transformSubObject = { ...otherProps, id: deezerId, type };

    return {
      ...transformObj,
      [type]: [...transformObj[type], transformSubObject],
    };
  };

  addFavoriteItem = async ({ id, ...otherProps }) => {
    const endpoint = '/favorites';

    const data = { deezerId: id, ...otherProps };

    const result = await this.http.request(endpoint, {
      ...this.#baseConfig,
      method: 'post',
      data,
    });

    const { deezerId, ...other } = result.data;

    return { id: deezerId, ...other };
  };

  deleteFavoriteItem = async (id) => {
    const endpoint = `/favorites/${id}`;

    const result = await this.http.request(endpoint, {
      ...this.#baseConfig,
      method: 'delete',
    });

    return result;
  };

  getFavoritesItems = async (userId) => {
    const endpoint = `/favorites?userId=${userId}`;

    const result = await this.http.request(endpoint, {
      ...this.#baseConfig,
      method: 'get',
    });

    return result.data.reduce(this.#transformFavorites, {
      artist: [],
      album: [],
      track: [],
    });
  };
}

export default UserService;
