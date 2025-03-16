import React from "react";
import ReactDOM from "react-dom/client";
import LOGO from './assets/logo.png';
import './index.css';
import restaurents from './restaurent_data.js';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurentCard = ({restaurent}) => {
    const {name, image, cuisine, rating, deliveryTime, price, location} = restaurent;
    return (
        <div className="restaurent-card">
            <h3>{name}</h3>
            <img className="res-img" src={image}/>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>{price}</h4>
            <h4>{location}</h4>
        </div>
    )
}

    const Body = () => {
        return (
            <div className="main-body"> 
                <div className="search">Search</div>
                <div className="restaurent-container">
                    {
                        restaurents.map((restaurent, index) => (
                            <RestaurentCard restaurent={restaurent} key={index}/>
                        ))
                    }
                </div>

            </div>
        )
    }

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}

const AppLayout = () => {
    return (
        <div id="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Body/>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
