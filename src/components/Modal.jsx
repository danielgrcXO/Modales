import React from 'react';
import '../styles/modal.css';

export default function Modal({children,isOpen,closeModal}){

    const handleClickContainer = (e) => { e.stopPropagation(); }; 

    return(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className='modal-container' onClick={handleClickContainer}>
                <button className='modal-close' onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    );
}