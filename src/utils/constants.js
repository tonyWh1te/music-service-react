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

export { PWD_REGEX, validationMessages };
