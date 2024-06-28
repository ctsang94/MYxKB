import React from 'react';
import './FriendRec.scss';
import image from '../../assets/ImmersiveTech.png';

const FriendRec = () => {
  return (
    <div className="section">
      <img className="section__image" src={image} alt="Placeholder" />
      <div className="section__text-box">
        <div className="section__title">Friend-Recommended Results</div>
        <div className="section__description">
        Allow location sharing and AI will restaurants your friends have visited and loved. Discover new brunch spots or hidden gems for dinner based on their reviews, photos, and ratings. Turn dining out into a shared adventure with Friend-Recommended Restaurants.        </div>
      </div>
      
      
    </div>
  );
};

export default FriendRec