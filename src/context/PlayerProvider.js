import { createContext } from 'react';
import { useReducer } from 'react';

const PlayerContext = createContext();

const playerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SONGS_ARRAY':
      return {
        ...state,
        songList: action.payload,
      };
    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
        show: true,
      };
    case 'TOGGLE_REPEAT':
      return {
        ...state,
        repeat: action.payload,
      };
    case 'TOGGLE_PLAYING':
      return {
        ...state,
        playing: action.payload,
      };
    case 'CLOSE_PLAYER':
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw new Error('Unknow action: ' + action.type);
  }
};

const PlayerProvider = ({ children }) => {
  const initialState = {
    currentSong: null,
    songList: [],
    repeat: false,
    playing: false,
    show: false,
  };

  const [state, dispath] = useReducer(playerReducer, initialState);

  const setSongList = (list) => dispath({ type: 'SET_SONGS_ARRAY', payload: list });

  const setCurrentSong = (id) => {
    if (state.currentSong !== id) {
      dispath({ type: 'SET_CURRENT_SONG', payload: id });
    }
  };

  const togglePlaying = () => dispath({ type: 'TOGGLE_PLAYING', payload: !state.playing });

  const toggleRepeat = () => dispath({ type: 'TOGGLE_REPEAT', payload: !state.repeat });

  const closePlayer = () => dispath({ type: 'CLOSE_PLAYER', payload: { currentSong: null, repeat: false, playing: false, show: false } });

  const prevSong = () => setCurrentSong(state.currentSong === 0 ? state.songList.length - 1 : state.currentSong - 1);

  const nextSong = () => setCurrentSong(state.currentSong === state.songList.length - 1 ? 0 : state.currentSong + 1);

  const onEndSong = () => {
    if (state.repeat) {
      setCurrentSong(state.currentSong);
    } else if (state.currentSong === state.songList.length - 1) {
      return;
    } else {
      nextSong();
    }
  };

  return (
    <PlayerContext.Provider value={{ state, setSongList, setCurrentSong, togglePlaying, toggleRepeat, prevSong, nextSong, onEndSong, closePlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
export { PlayerProvider };
