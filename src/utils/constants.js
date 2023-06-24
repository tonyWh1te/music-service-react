// Validation
const PWD_REGEX = /^[\w\dа-яА-Я]+$/;

const validationMessages = {
  name: {
    minLength: 'The minimum number of characters is 2!',
    format: 'Only letters and numbers!',
  },
  password: {
    minLength: 'The minimum number of characters is 8!',
  },
  email: {
    format: 'Incorrect email format',
  },
  dateOfBirth: {
    validDate: "You can't be born in the future!",
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

export { PWD_REGEX, validationMessages, SET_SONGS_ARRAY, SET_CURRENT_SONG, TOGGLE_REPEAT, TOGGLE_PLAYING, CLOSE_PLAYER, sizes };
