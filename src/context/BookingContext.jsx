import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [preSelectedService, setPreSelectedService] = useState(null);

    const openBooking = (service = null) => {
        setPreSelectedService(service);
        setIsModalOpen(true);
    };

    const closeBooking = () => {
        setIsModalOpen(false);
        setPreSelectedService(null);
    };

    return (
        <BookingContext.Provider value={{ openBooking }}>
            {children}
            <BookingModal isOpen={isModalOpen} onClose={closeBooking} preSelectedService={preSelectedService} />
        </BookingContext.Provider>
    );
};
