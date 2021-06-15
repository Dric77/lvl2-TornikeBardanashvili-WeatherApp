import React, { useState } from 'react';
import '../App.scss';

function Modal({showModal,setShowModal, overly, setOverly}) {

    let hideModal = () => {
        setShowModal('hidden-modal');
        setOverly('hidden-modal')
    }

    return (
        <div className={showModal}>
            <div className='modal-container'>
            <div className='modal-header'>
                <p>SundayM, June 13</p>
                <button onClick={hideModal} className="close-modal">X</button>
            </div>
            <div className="modal-main">
                <ul>
                    <li>
                        <h6>6PM</h6>
                        <div>
                            <img src="https://www.weatherbit.io/static/img/icons/c02d.png" />
                            <h6>15&#8451;</h6>
                        </div>
                        <p>Clear Sky</p>
                    </li>
                    <li>
                        <h6>6PM</h6>
                        <div>
                            <img src="https://www.weatherbit.io/static/img/icons/c02d.png" />
                            <h6>15&#8451;</h6>
                        </div>
                        <p>Clear Sky</p>
                    </li>
                    <li>
                        <h6>6PM</h6>
                        <div>
                            <img src="https://www.weatherbit.io/static/img/icons/c02d.png" />
                            <h6>15&#8451;</h6>
                        </div>
                        <p>Clear Sky</p>
                    </li>
                    <li>
                        <h6>6PM</h6>
                        <div>
                            <img src="https://www.weatherbit.io/static/img/icons/c02d.png" />
                            <h6>15&#8451;</h6>
                        </div>
                        <p>Clear Sky</p>
                    </li>
                    <li>
                        <h6>6PM</h6>
                        <div>
                            <img src="https://www.weatherbit.io/static/img/icons/c02d.png" />
                            <h6>15&#8451;</h6>
                        </div>
                        <p>Clear Sky</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Modal
