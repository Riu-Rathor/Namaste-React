import React from "react";
import RestaurentCard from "./RestaurentCard.jsx";
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
        <div className=""> 
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="" 
                    placeholder="Search"
                    className="border-solid border-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-100 m-4" onClick={handleSearch}>
                        <CiSearch/>
                    </button>

                </div>
                <button className="px-4 py-2 bg-gray-100" onClick={getTopRatedRestaurents}>
                    Top Rated Restaurents
                </button>

                <button className="" onClick={getAllRestaurents}>
                    All Restaurents
                </button>
            </div>
            <div className="flex flex-wrap">
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