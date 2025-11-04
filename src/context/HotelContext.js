import React, { createContext, useState } from "react";

// Create Context
const HotelContextData = createContext();

const HotelContext = ({ children }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <HotelContextData.Provider
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
    </HotelContextData.Provider>
  );
};

export { HotelContext, HotelContextData };
