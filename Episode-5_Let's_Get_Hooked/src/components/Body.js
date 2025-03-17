import React from "react";
import RestaurentCard from "./RestaurentCard";
import restaurents from '../utils/restaurent_data.js';
import { useState } from "react";

const Body = () => {
    const [restaurentList, setRestaurentList] = useState(restaurents);

    function getTopRatedRestaurents() {
        const topRestaurents = restaurentList.filter((restaurent) => (
            restaurent.rating > 4.0
        ));

        setRestaurentList(topRestaurents);
    }
    function getAllRestaurents() {
        setRestaurentList(restaurents);
    }
    return (
        <div className="main-body"> 
            <div className="filter">
                <button className="filter-btn" onClick={getTopRatedRestaurents}>
                    Top Rated Restaurents
                </button>

                <button className="filter-btn" onClick={getAllRestaurents}>
                    All Restaurents
                </button>
            </div>
            <div className="restaurent-container">
                {
                    restaurentList.map((restaurent, index) => (
                        <RestaurentCard restaurent={restaurent} key={index}/>
                    ))
                }
            </div>

        </div>
    )
}
export default Body;