import React from 'react';
import './NewSearch.scss';
import image from '../../assets/google.jpeg'

const NewSearch = () => {
  return (
    <>
    <div className='figma__box'>
      <div className='box'>
        <img className="box__image" src={image} alt="Placeholder" />
      </div>
      <div className="box__text-box">
        <div className="box__title">New Search Go-To</div>
        <div className="box__description">
          Maps aims to be more like Search: a go-to place for getting directions, finding coffee shops, and locating EV chargers, but also for entering broad queries like “fall foliage,” “latte art,” or “things to do in Tokyo” and receiving a range of useful results.
        </div>
      </div>
    </div>
    </>
  );
};

export default NewSearch