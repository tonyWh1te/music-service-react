import { createContext } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

const AuthContext = createContext([{}, () => {}, () => {}]);

const AuthProvider = ({ children }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', {});

  const login = (newUser, callback) => {
    setAuth(newUser);
    callback();
  };

  const updateUserData = (data) => {
    setAuth({ user: { ...data } });
  };

  const logout = (callback) => {
    removeAuth();

    if (callback) {
      callback();
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, updateUserData }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
