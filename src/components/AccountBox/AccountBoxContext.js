import { createContext } from 'react';

const AccountContext = createContext({
  switchToLogin: () => {},
  switchToSignUp: () => {},
});

export { AccountContext };
