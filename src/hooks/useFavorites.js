import { useContext } from 'react';
import FavoritesContext from '../context/FavoritesProvider';

const useFavorites = () => {
  const context = useContext(FavoritesContext);

  const defaultCallbacks = {
    deleteCallback: () => {},
    addCallback: () => {},
  };

  const onAddToFavClick = (item, isFav, callbacks = defaultCallbacks) => {
    if (isFav) {
      context.deleteFromFavorites(item);

      if ('deleteCallback' in callbacks) {
        callbacks.deleteCallback();
      }
    } else {
      context.addToFavorites(item);

      if ('addCallback' in callbacks) {
        callbacks.addCallback();
      }
    }
  };

  return { onAddToFavClick, context };
};

export default useFavorites;
