import React, { useContext, useState } from "react";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const data = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");
  const handleBtnClick = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="flex justify-between h-15 bg-green-200 items-center px-2">
      <div className="">
        <img className="" src={LOGO} alt="logo" />
      </div>

      <div className="">
        <ul className="flex gap-5">
          <Link to={"/"} className="hover:text-lg transition-all duration-200">
            Home
          </Link>

          <Link
            to={"/about"}
            className="hover:text-lg transition-all duration-200"
          >
            About Us
          </Link>

          <Link
            to={"/contact"}
            className="hover:text-lg transition-all duration-200"
          >
            Contact Us
          </Link>

          <Link
            to={"/cart"}
            className="hover:text-lg transition-all duration-200"
          >
            Cart
          </Link>

          <button
            className="bg-green-800 text-white py-1 px-3 rounded-md cursor-pointer"
            onClick={handleBtnClick}
          >
            {btnName}
          </button>

          <Link to={"/"} className="hover:text-lg transition-all duration-200">
            {data.loggedInUser}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
