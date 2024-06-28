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
        <div className="container__title">New Search Go-To</div>
        <div className="container__description">With AI, we’ve introduced Immersive View for routes, letting you preview your journey before driving, walking, or cycling.

        </div>
      </div>
      <div className="container__pagination">
        <div className="container__dot" />
        <div className="container__dot container__dot--active" />
        <div className="container__dot" />
      </div>
    </div>
  );
};

export default ImmersiveTech