import { createContext } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

const AuthContext = createContext([{}, () => {}, () => {}]);

const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', {});

  const login = (newUser, callback) => {
    setAuth(newUser);
    callback();
  };

  const logout = (callback) => {
    removeAuth();
    callback();
  };

  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
export { AuthProvider };
