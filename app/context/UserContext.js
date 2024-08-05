import React, { createContext, useState } from "react";

const UserContext = createContext();

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
