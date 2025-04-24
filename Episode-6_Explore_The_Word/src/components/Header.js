import React, { useState } from "react";
import LOGO from '../../assets/logo.png';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const handleBtnClick = () => {
        if(btnName === "Login") {
            setBtnName("Logout");
        }
        else {
            setBtnName("Login")
        }
    }
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
                    <button className="login" onClick={handleBtnClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;