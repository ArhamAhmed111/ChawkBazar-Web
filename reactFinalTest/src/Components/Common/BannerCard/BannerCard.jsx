import React from 'react';
import './BannerCard.css';

const BannerCard = ({ data, cardClass }) => {
    const { Title, Subtitle, Collection, Nav, ImageSrc } = data;
    return (
        <div className={`card ${cardClass}`}>
            <div className='card-text'>
                <h1>{Title}</h1>
                <h2>{Subtitle}</h2>
                <h4>{Collection}</h4>
                <p>{Nav}</p>
            </div>
            
        </div>
    );
};

export default BannerCard;
