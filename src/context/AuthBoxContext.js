import { createContext } from 'react';

const AuthBoxContext = createContext({
  switchToLogin: () => {},
  switchToSignUp: () => {},
});

export { AuthBoxContext };
