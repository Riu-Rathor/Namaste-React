import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const RestaurentCard = ({restaurent}) => {
    const data = useContext(UserContext);
    const {name, image, cuisine, rating, deliveryTime, price, location} = restaurent;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem(name));
    }
    return (
        <div className="flex flex-col m-4 p-4 w-[200px] hover:cursor-pointer bg-gray-100 flxe-centered">
            <img className="res-img" src={image}/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>{price}</h4>
            <h4>{location}</h4>
            <button className="bg-green-100 rounded-md cursor-pointer hover:bg-green-200 justify-center items-center" onClick={addToCart}>Add</button>
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