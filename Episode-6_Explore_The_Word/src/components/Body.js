import React, { useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import restaurents from '../utils/restaurent_data.js';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState(restaurents);
    const [filteredRestaurent, setFilteredRestaurent] = useState(restaurents);
    const [searchText, setSearchText] = useState("");

    function getTopRatedRestaurents () {
        const topRestaurents = restaurentList.filter((restaurent) => (
            restaurent.rating > 4.0
        ));

        setRestaurentList(topRestaurents);
    }

    function getAllRestaurents() {
        setRestaurentList(restaurents);
    }

    function handleSearch() {
        const filteredRestaurents = restaurentList.filter((restaurent) => (
            restaurent.name.toLowerCase().includes(searchText.toLowerCase())
        ))
        setFilteredRestaurent(filteredRestaurents);
    }

    return (
        <div className="main-body"> 
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    placeholder="Search"
                    className="search-bar"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="btn-search" onClick={handleSearch}>
                        <CiSearch/>
                    </button>

                </div>
                <button className="filter-btn" onClick={getTopRatedRestaurents}>
                    Top Rated Restaurents
                </button>

                <button className="filter-btn" onClick={getAllRestaurents}>
                    All Restaurents
                </button>
            </div>
            <div className="restaurent-container">
                {
                    filteredRestaurent.map((restaurent, index) => (
                        <RestaurentCard restaurent={restaurent} key={index}/>
                    ))
                }
            </div>

        </div>
    )
}
export default Body;