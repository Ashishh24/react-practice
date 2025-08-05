import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart  = () => {
    // important to select only that part of store which is needed here
    // if we select whole store here, even if other slice gets change, 
    // this slice will get rerendered
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div>
            <div className="flex gap-3">
                <h1 className="w-[50%] text-2xl font-bold text-center mx-auto items-center">CART</h1>
                <button className="px-4 border mx-auto cursor-pointer" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="mt-7.5">
                {cartItems.map((item, index) => {
                    return <CartCard key={index} itemData={item} />
                })}
            </div>
        </div>
    )
};

export default Cart;