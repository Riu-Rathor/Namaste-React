import React from "react";

const RestaurentCard = ({restaurent}) => {
    const {name, image, cuisine, rating, deliveryTime, price, location} = restaurent;
    return (
        <div className="flex flex-col m-4 p-4 w-[200px] hover:cursor-pointer bg-gray-100">
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

export default RestaurentCard;