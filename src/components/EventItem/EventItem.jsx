import React from 'react';
import { Link } from 'react-router-dom';
import './EventItem.css';

const EventItem = ({ title, image1, image2, matchdate, price }) => {
    return (
        <div className="event">
            <div className="event-date">
                <p>{matchdate}</p>
            </div>
            <div className="event-info">
                <img className="event-img" src={image1} alt="Team 1" />
                <p>{title}</p>
                <img className="event-img" src={image2} alt="Team 2" />
            </div>
            <Link to="/info">
                <button className="event-button">From {price}$</button>
            </Link>
        </div>
    );
};

export default EventItem;
