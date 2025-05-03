import React, { useState } from "react";
import LOGO from '../../assets/logo.png';
import { Link } from "react-router-dom";

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
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/cart'}>Cart</Link>
                    <button className="login" onClick={handleBtnClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;