import React, {useState} from 'react';
import Modal from './Modal';
import { useModal } from '../hooks/useModal';

export default function Modals(){
    
    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    const [isOpenModal2,openModal2,closeModal2] = useModal(false);
    
    
    return(
        <>
            <h1>Modals Exercise</h1>
            <br></br>

            <button onClick={openModal1}>This is modal 1</button>
            <button onClick={openModal2}>This is modal 2</button>
            
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>This is my first modal</p>
                <br></br>
                <img src='https://placeimg.com/400/400/animals' alt='Animals'></img>
            </Modal>
            <Modal isOpen={isOpenModal2}  closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>This is my second modal</p>
                <br></br>
                <img src='https://placeimg.com/400/400/nature' alt='Nature'></img>
            </Modal>
        </>
    );
}