import React from 'react';
import './ImmersiveTech.scss';
import video from '../../assets/mapsearch.mp4'

const ImmersiveTech = () => {
  return (
    <div className="container">
                      <video autoPlay loop muted className="figma__video">
                        <source src={video} type="video/mp4" />
                    </video>
      <div className="container__text-box">
        <div className="container__title">Immersive Technology</div>
        <div className="container__description">With AI, we’ve introduced Immersive View for routes, letting you preview your journey before driving, walking, or cycling.

        </div>
      </div>
    </div>
  );
};

export default ImmersiveTech