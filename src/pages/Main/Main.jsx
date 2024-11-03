import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Hero from '../../assets/hero-image.png';
import Sponsors from '../../assets/sponsors.png';
import img1 from '../../assets/shakhtar.png';
import img2 from '../../assets/arsenal.png';
import EventItem from "../../components/EventItem/EventItem";
import CustomButton from "../../components/CustomButton/CustomButton";

const Main = () => {
    const eventsData = [
        {
            title: "Match 1: Team A vs Team B",
            image1: img1,
            image2: img2,
            matchdate: "Tue\n22 Oct\n2024",
            price: 20,
        },
        {
            title: "Match 2: Team C vs Team D",
            image1: img1,
            image2: img2,
            matchdate: "Tue\n22 Oct\n2024",
            price: 25,
        },
        {
            title: "Match 3: Team E vs Team F",
            image1: img1,
            image2: img2,
            matchdate: "Tue\n22 Oct\n2024",
            price: 30,
        },
    ];

    return (
        <div>
            <nav className="navbar">
                <h2 style={{color: "#4F4CEE"}}>ChampionsTicket.com</h2>
                <ul className="navbar-list">
                    <li><a href="#events">Upcoming events</a></li>
                    <li><a href="#offers">Hot Offers</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <section className="hero">
                <img src={Hero} alt="UEFA Champions League" className="hero-image"/>
            </section>
            <div className="content">
                <div className="event-list" id="events">
                    <h1>Upcoming events</h1>
                    <div className="event-items">
                        {eventsData.map((event, index) => (
                            <EventItem
                                key={index}
                                title={event.title}
                                image1={event.image1}
                                image2={event.image2}
                                matchdate={event.matchdate}
                                price={event.price}
                            />
                        ))}
                    </div>
                    <div style={{display: "flex", justifyContent: "center", margin: "30px"}}>
                        <CustomButton title="Load more"/>
                    </div>
                </div>
                <div className="hot-offers-list" id="offers">
                    <h1>Hot offers</h1>
                    <div className="event-items">
                        {eventsData.map((event, index) => (
                            <EventItem
                                key={index}
                                title={event.title}
                                image1={event.image1}
                                image2={event.image2}
                                matchdate={event.matchdate}
                                price={event.price}
                            />
                        ))}
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", margin: "30px"}}>
                    <CustomButton title="Load more"/>
                </div>
                <div className="about-us" id="about">
                    <h1>About Us</h1>
                    <h2 style={{color: "#242565", textAlign: "center"}}>UEFA Champions League official sponsors</h2>
                    <h4 style={{color: "#6A6A6A", textAlign: "center"}}>Official global sponsors</h4>
                    <img src={Sponsors} alt="Sponsors"/>
                </div>
            </div>
            <footer>
                <h2>© 2024 ChampionsTicket.com</h2>
            </footer>
        </div>
    );
};

export default Main;
