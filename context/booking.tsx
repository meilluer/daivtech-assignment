import React, { createContext, useContext, useState } from 'react';
interface BookingContextType {
  city: string;
  setCity: (city: string) => void;
  movie: any;
  setMovie: (movie: any) => void;
  bookingDetails: { date: string; time: string; seats: string[] };
  setBookingDetails: (details: any) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState('');
  const [movie, setMovie] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({ date: '', time: '', seats: [] });

  return (
    <BookingContext.Provider value={{ city, setCity, movie, setMovie, bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};