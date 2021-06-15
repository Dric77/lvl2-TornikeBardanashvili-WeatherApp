import React from 'react';
import Modal from './Modal';


const HourlyBtn = ({setShowModal, overly, setOverly}) => {

    let handleModal = () => {
        setShowModal('show-modal');
        setOverly('overly show-modal')
    }
    
    return(
        <button onClick={handleModal} className="Hourly-btn" >Hourly Frocast</button>
    )
};

export default HourlyBtn;