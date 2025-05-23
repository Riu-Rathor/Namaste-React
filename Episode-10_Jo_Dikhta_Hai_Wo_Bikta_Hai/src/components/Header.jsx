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
        <div className="flex justify-between h-10 bg-green-200">
            <div className="">
                <img className="" src={LOGO} alt="logo"/>
            </div>

            <div className="">
                <ul className="flex gap-2">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/cart'}>Cart</Link>
                    <button className="px-2 bg-green-100" onClick={handleBtnClick}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;