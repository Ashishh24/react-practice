import { itemPic, veg, nonVeg } from "../utils/links";

const MenuCard = (props) => {
    const {itemData} = props;

    if (!itemData) return null;

    const {imageId, name, isVeg, defaultPrice, description, ratings} = itemData;

    return (
        <div>
            <div className="flex justify-between border-b-1 border-gray-400 my-7 px-2 py-4 hover:border-gray-500 hover:shadow-2xl">
                <div className="flex flex-col w-10/12">
                    <span>{isVeg ? <img className="max-h-5" src={veg} /> : <img className="max-h-5" src={nonVeg} />}</span>
                    <span className="font-medium">{name}</span>
                    <span className="font-light">₹{defaultPrice/100}</span>
                    {ratings?.aggregatedRating?.rating 
                        ? <span className="text-sm font-bold text-green-800">⭐{ratings?.aggregatedRating?.rating + " (" + ratings?.aggregatedRating?.ratingCountV2 +")"}</span> 
                        : <p></p>
                    }
                    <span className="text-xs">{description}</span>
                </div>
                <div className="w-2/12 py-2.5 flex flex-col items-center justify-center relative">
                    <img className="max-h-40 py-2.5 rounded-2xl " src={itemPic+imageId}/>
                    <button className="border font-bold bg-white text-green-700 absolute -bottom-1 hover:bg-green-700 hover:text-white px-8 py-1.5 rounded-2xl justify-center">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;