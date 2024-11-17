import React, { useState } from 'react';
import './Info.css';

import img1 from '../../assets/real_madrid_logo.png'
import img2 from '../../assets/ac_milan_logo.png'
import stadium_plan from '../../assets/stadium_plan.png'
import choose from '../../assets/ticket_choose.png'


const Info = () => {
    const [quantity, setQuantity] = useState(2);
    const selectedCategory = "Category 3";
    const price = 200000;
    const total = price * quantity;

    return (

        <div className="ticket-booking">
            <div>
                <div className="event-details">
                    <h2>Event Details</h2>
                    <div className="teams">
                        <img src={img1} alt="Real Madrid"/>
                        <h3>Real Madrid vs AC Milan</h3>
                        <img src={img2} alt="AC Milan"/>
                    </div>
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-item">
                        <span>Ticket Type</span>
                        <span>{quantity} x {selectedCategory}</span>
                    </div>
                    <div className="summary-item">
                        <span>Ticket Price</span>
                        <span>{quantity} x Rp. {price.toLocaleString()}</span>
                    </div>
                    <div className="summary-item">
                        <span>Total</span>
                        <span>Rp. {total.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="stadium-plan">
                    <img src={stadium_plan} className="img_stad"/>
                    <img src={choose} className="img_choose"/>
                    <div className="checkout">
                        <button onClick={() => alert("Tickets purchased!")}>Buy Tickets</button>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Info;
