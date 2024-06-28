import React from 'react';
import './NewSearch.scss';
import image from '../../assets/google.jpeg'

const NewSearch = () => {
  return (
    <>
      <div className='container'>
        <img className="container__image" src={image} alt="Placeholder" />
      </div>
      <div className="container__text-box">
        <div className="container__title">New Search Go-To</div>
        <div className="container__description">
          Maps aims to be more like Search: a go-to place for getting directions, finding coffee shops, and locating EV chargers, but also for entering broad queries like “fall foliage,” “latte art,” or “things to do in Tokyo” and receiving a range of useful results.
        </div>
      </div>
    </>
  );
};

export default NewSearch