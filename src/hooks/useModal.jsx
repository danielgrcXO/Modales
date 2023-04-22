import React, {useState} from 'react';

export const useModal = (initialValue) => {

    //state
    const [isOpen,setIsOpen] = useState(initialValue = false);

    //functions
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    
    //return
    return [isOpen,openModal,closeModal];
}