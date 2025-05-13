import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurentCard = ({restaurent}) => {
    const data = useContext(UserContext);
    const {name, image, cuisine, rating, deliveryTime, price, location} = restaurent;
    return (
        <div className="flex flex-col m-4 p-4 w-[200px] hover:cursor-pointer bg-gray-100">
            <img className="res-img" src={image}/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>{price}</h4>
            <h4>{location}</h4>
            <h4>{data.loggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurentCard) => {
    return(restaurent) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-1 rounded-lg">Promoted</label>
                <RestaurentCard {...restaurent}/>
            </div>
        )
    }
}

export default RestaurentCard;