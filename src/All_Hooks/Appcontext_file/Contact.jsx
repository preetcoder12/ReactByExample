import React, { createContext } from "react";

export const AppContext = createContext();

const Contact = ({ children }) => {
  const phone = "+91 1234567899";

  return (
    <AppContext.Provider value={phone}>
      {children}
    </AppContext.Provider>
  );
};

export default Contact;
