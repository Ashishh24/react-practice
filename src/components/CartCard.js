import { itemPic, veg, nonVeg } from "../utils/links";

const CartCard = (props) => {
    // console.log("propsss", props);
    
    const {itemData} = props;
    // console.log(itemData);
    
    const {imageId, name, price, defaultPrice} = itemData;

    return (
        <div className="flex w-[60%] mx-auto h-20 border-b-2 border-[#ccc] py-3 hover:shadow-2xl mb-3">
            <div className="w-[10%]">
                <img src={itemPic+imageId} className="rounded-full w-15" />
            </div>
            <div className="w-[90%] flex items-center">
                <div className="w-[80%]">{name}</div>
                <div>{defaultPrice ? defaultPrice/100: price/100}</div>
            </div>
        </div>
    )
};

export default CartCard;