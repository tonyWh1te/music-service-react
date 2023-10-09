import { useContext } from 'react';
import PlayerContext from '../context/PlayerProvider';

const usePlayer = () => {
  return useContext(PlayerContext);
};

export default usePlayer;
