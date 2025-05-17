import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-5 p-5">
            <div className="text 2xl font-bold">Cart</div>
            <button onClick={handleClearCart} className="rounded-md bg-black text-white p-2 cursor-pointer">Clear Cart</button>
            {
                cart.items.length === 0 && 
                <h1>Add items to cart</h1>
            }
            {
                cart.items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))
            }        
        
        </div>
    )
}
export default Cart;