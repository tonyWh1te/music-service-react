import { createContext, useReducer, useCallback } from 'react';
import {
  SET_SONGS_ARRAY,
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  CLOSE_PLAYER,
  TOGGLE_PLAYING,
} from '../utils/constants';

const PlayerContext = createContext();

const playerReducer = (state, action) => {
  switch (action.type) {
    case SET_SONGS_ARRAY:
      return {
        ...state,
        songList: [...action.payload],
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSongIndex: action.payload,
        activeSong: state.songList[action.payload],
        playing: true,
        show: true,
      };
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.payload,
      };
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload,
      };
    case CLOSE_PLAYER:
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
    currentSongIndex: null,
    activeSong: {},
    songList: [],
    repeat: false,
    playing: false,
    show: false,
  };

  const [state, dispath] = useReducer(playerReducer, initialState);

  const setSongList = useCallback((list) => {
    dispath({ type: 'SET_SONGS_ARRAY', payload: list });
  }, []);

  const setCurrentSong = useCallback((i) => {
    dispath({ type: 'SET_CURRENT_SONG', payload: i });
  }, []);

  const playPause = (isPlaying) =>
    dispath({ type: 'TOGGLE_PLAYING', payload: isPlaying });

  const toggleRepeat = () =>
    dispath({ type: 'TOGGLE_REPEAT', payload: !state.repeat });

  const closePlayer = () =>
    dispath({
      type: 'CLOSE_PLAYER',
      payload: {
        currentSongIndex: null,
        activeSong: {},
        repeat: false,
        playing: false,
        show: false,
      },
    });

  const prevSong = () =>
    setCurrentSong(
      state.currentSongIndex === 0
        ? state.songList.length - 1
        : state.currentSongIndex - 1
    );

  const nextSong = () =>
    setCurrentSong(
      state.currentSongIndex === state.songList.length - 1
        ? 0
        : state.currentSongIndex + 1
    );

  const onEndSong = () => {
    if (state.repeat) {
      setCurrentSong(state.currentSongIndex);
    } else if (state.currentSongIndex === state.songList.length - 1) {
      return;
    } else {
      nextSong();
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        state,
        setSongList,
        setCurrentSong,
        playPause,
        toggleRepeat,
        prevSong,
        nextSong,
        onEndSong,
        closePlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
export { PlayerProvider };
