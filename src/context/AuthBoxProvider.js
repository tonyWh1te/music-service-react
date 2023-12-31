import { createContext, useState } from 'react';

const AuthBoxContext = createContext({
  activeForm: 'login',
  onSwitchForm: () => {},
});

const AuthBoxProvider = ({ children }) => {
  const [activeForm, setActiveForm] = useState('login');

  const onSwitchForm = (active) => {
    setActiveForm(active);
  };

  const contextValue = { onSwitchForm, activeForm };

  return (
    <AuthBoxContext.Provider value={contextValue}>
      {children}
    </AuthBoxContext.Provider>
  );
};

export { AuthBoxProvider };
export default AuthBoxContext;
