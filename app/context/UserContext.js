// context/MyContext.js
import React, { createContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a context provider component
const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
