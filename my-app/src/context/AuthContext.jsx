import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'login' }); // 'login' or 'signup'
  const [user, setUser] = useState(null);

  const openLogin = () => setAuthModal({ isOpen: true, type: 'login' });
  const openSignUp = () => setAuthModal({ isOpen: true, type: 'signup' });
  const closeModal = () => setAuthModal({ isOpen: false, type: 'login' });

  const loginUser = (userData) => {
    setUser(userData);
    closeModal();
  };

  const logoutUser = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        authModal,
        openLogin,
        openSignUp,
        closeModal,
        user,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
