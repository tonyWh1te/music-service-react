//search param
const PARAM_NAME = 'tab';
const GENRE_PARAM_VALUE_DEFAULT = 'overview';
const LIBRARY_PARAM_VALUE_DEFAULT = 'artists';

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
const PROD_API_MUSIC_PATH = `https://api.deezer.com`;
const DEV_API_MUSIC_PATH = `/musicApi`;
const PROXY = 'https://thingproxy.freeboard.io/fetch/';

export {
  validationMessages,
  SET_SONGS_ARRAY,
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  CLOSE_PLAYER,
  sizes,
  PARAM_NAME,
  LIBRARY_PARAM_VALUE_DEFAULT,
  GENRE_PARAM_VALUE_DEFAULT,
  BUTTON_IDS,
  DEV_API_MUSIC_PATH,
  PROD_API_MUSIC_PATH,
  PROXY,
};
