import { useState, createContext, useEffect } from 'react';
import { useAuth } from '../hooks';
import UserService from '../service/UserService.service';

const FavoritesContext = createContext({
  favItems: {},
  addToFavorites: () => {},
  deleteFromFavorites: () => {},
  isFavorited: () => {},
});

const FavoritesProvider = ({ children }) => {
  const initState = {
    artist: [],
    album: [],
    track: [],
  };

  const [favItems, setFavItems] = useState(initState);

  const userService = new UserService();

  const { auth } = useAuth();
  const userId = auth.user.id;

  useEffect(() => {
    userService.getFavoritesItems(userId).then((data) => {
      setFavItems(data);
    });
  }, []);

  const addToFavorites = (item) => {
    userService.addFavoriteItem({ ...item, userId }).then((data) =>
      setFavItems((prevState) => {
        const type = data.type;

        return {
          ...prevState,
          [type]: [...prevState[type], data],
        };
      })
    );
  };

  const deleteFromFavorites = ({ id, type }) => {
    const { mokkyId } = favItems[type].find((item) => item.id === id);

    userService.deleteFavoriteItem(mokkyId);

    setFavItems((prevState) => {
      const newArr = prevState[type].filter((item) => item.mokkyId !== mokkyId);

      return {
        ...prevState,
        [type]: [...newArr],
      };
    });
  };

  const isFavorited = (id, type) => {
    return favItems[type].some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favItems, addToFavorites, deleteFromFavorites, isFavorited }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
export { FavoritesProvider };
