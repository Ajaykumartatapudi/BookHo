// src/context/HotelContext.js
import React, { createContext, useState } from "react";

const Context = createContext();

const HotelContext = ({ children }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ new state

  return (
    <Context.Provider
      value={{
        selectedHotel,
        setSelectedHotel,
        isLoggedIn,
        setIsLoggedIn, // ✅ export setter too
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as HotelContextData, HotelContext };
