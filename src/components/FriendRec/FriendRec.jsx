import React from 'react';
import './FriendRec.scss';
import image from '../../assets/google.jpeg';

const FriendRec = () => {
  return (
    <div className="container">
      <div className="container__text-box">
        <div className="container__title">Friend-Recommended Results</div>
        <div className="container__description">
        Allow location sharing and AI will restaurants your friends have visited and loved. Discover new brunch spots or hidden gems for dinner based on their reviews, photos, and ratings. Turn dining out into a shared adventure with Friend-Recommended Restaurants.        </div>
      </div>
      <div className="container__pagination">
        <div className="container__dot" />
        <div className="container__dot container__dot--active" />
        <div className="container__dot" />
      </div>
      <img className="container__image" src={image} alt="Placeholder" />
    </div>
  );
};

export default FriendRec