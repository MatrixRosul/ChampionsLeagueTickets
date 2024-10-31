import React from 'react';
import css from './EventItem.css'


const EventItem = ({title,image1,image2,matchdate,price}) => {
    return (
        <div className="event">
            <div className="event-date">
                <p>{matchdate}</p>
            </div>
            <div className="event-info">
                <img className="event-img" src={image1} alt=""/>
                <p>{title}</p>
                <img className="event-img" src={image2} alt=""/>
            </div>
                <button className="event-button">From {price}$</button>

        </div>
    );
};

export default EventItem;