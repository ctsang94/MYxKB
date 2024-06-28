import React, { useState } from 'react';
import './AIPoweredResult.scss';
import video from '../../assets/googlevideo.mp4';


const AIPoweredResult = () => {

    return (
                <div className="figma__container">
                    <video autoPlay loop muted className="figma__video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="figma__text-container">
                        <div className="figma__title">AI-Powered Results</div>
                        <div className="figma__description">
                            Simply mention what you’re looking for, and our large-language models (LLMs) will analyze detailed information on over 250 million places, along with insights from our community of over 300 million contributors, to quickly suggest where to go.
                        </div>
                    </div>
                </div>
    );
};

export default AIPoweredResult;
