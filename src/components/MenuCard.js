import { itemPic } from "../utils/links";

const MenuCard = (props) => {
    const {itemData} = props;

    if (!itemData) return null; // Safely skip rendering if data is missing

    const {imageId, name, isVeg, defaultPrice} = itemData;

    const isVegg = isVeg ? "Vegeterain" : "Non-Vegeterain";
    return (
        <div>
            <div className="w-[90%] flex justify-between p-2.5 hover:border hover:border-solid hover:border:[#ccc] hover:shadow-[#f0f0f0]">
                <div className="item-desc">
                    <h3>{name}</h3><br/>
                    <h4>₹{defaultPrice/100}</h4><br />
                    <h4>{isVegg}</h4>
                </div>
                <img className="item-pic max-h-30 w-auto object-contain block" src={itemPic+imageId}/>            
            </div>
        </div>
    )
}

export default MenuCard;