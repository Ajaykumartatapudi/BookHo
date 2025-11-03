import React, { createContext, useState } from "react";

const Context = createContext();

const HotelContext = ({ children }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null); // ✅ New

  return (
    <Context.Provider
      value={{
        selectedHotel,
        setSelectedHotel,
        isLoggedIn,
        setIsLoggedIn,
        bookingDetails,
        setBookingDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as HotelContextData, HotelContext };
