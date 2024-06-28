import React, { useState } from 'react';
import './Modal.scss';
import { Button } from '@mui/material';
import AIPoweredResult from '../AIPoweredResult/AIPoweredResult';
import NewSearch from '../NewSearch/NewSearch';
import ImmersiveTech from '../ImmersiveTech/ImmersiveTech'
import FriendRec from '../FriendRec/FriendRec'

const Modal = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleSkip = () => {
        setCurrentPage(1);
    };
    return (
        <div className="figma">
            {currentPage === 1 && (<div className='figma__container'> <AIPoweredResult /> </div>)}
            {currentPage === 2 && (<div className='figma__container'> <NewSearch /> </div>)}
            {currentPage === 3 && (<div className='figma__container'> <ImmersiveTech /> </div>)}
            {currentPage === 4 && (<div className='figma__container'> <FriendRec /> </div>)}
            
            <div className="figma__controls">
                {currentPage < 4 && <Button onClick={handleNext}>Next</Button>}
                {currentPage === 4 && <Button onClick={handleSkip}>Finish</Button>}
                <div className="figma__pagination">
                    <div className={`figma__dot ${currentPage === 1 ? 'figma__dot--active' : ''}`} />
                    <div className={`figma__dot ${currentPage === 2 ? 'figma__dot--active' : ''}`} />
                    <div className={`figma__dot ${currentPage === 3 ? 'figma__dot--active' : ''}`} />
                    <div className={`figma__dot ${currentPage === 4 ? 'figma__dot--active' : ''}`} />
                </div>
                {currentPage < 4 && <Button onClick={handleSkip}>Skip</Button>}
            </div>
        </div>
    );
}

export default Modal