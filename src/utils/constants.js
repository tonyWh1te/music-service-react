//search param
const PARAM_NAME = 'tab';
const PARAM_VALUE_DEFAULT = 'overview';

const validationMessages = {
  password: {
    minLength: 'The minimum number of characters is 8!',
  },
  email: {
    format: 'Incorrect email format',
  },
  required: 'Required field!',
};

// Types of player functions
const SET_SONGS_ARRAY = 'SET_SONGS_ARRAY';
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
const TOGGLE_REPEAT = 'TOGGLE_REPEAT';
const TOGGLE_PLAYING = 'TOGGLE_PLAYING';
const CLOSE_PLAYER = 'CLOSE_PLAYER';

// screen sizes
const sizes = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  '2xl': '1696px',
};

// button assignment
const BUTTON_IDS = {
  ADD: 'add',
  PLAY: 'play',
  SHARE: 'share',
  FOLLOW: 'follow',
};

// http config
const API_MUSIC_PATH = `https://api.deezer.com`;

export {
  validationMessages,
  SET_SONGS_ARRAY,
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  CLOSE_PLAYER,
  sizes,
  PARAM_NAME,
  PARAM_VALUE_DEFAULT,
  BUTTON_IDS,
  API_MUSIC_PATH,
};
