import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuAccordions from "./MenuAccordions";

const Menu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [showIndex, setShowIndex] = useState(0);
    const {resID} = useParams();

    const fetchMenu = async () => {
        const resAPIURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`;
        const data = await fetch(resAPIURL);
        const dataJson = await data.json();
        
        setResInfo(dataJson?.data);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    if(resInfo?.length === 0) {
        return (
            <Shimmer/>
        )
    }

    const {name, cuisines, costForTwoMessage, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

    const section = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="w-[75%] my-2.5 mx-auto justify-center p-1.25 max-h-[100%] overflow-hidden box-border">
            <h1 className="text-center font-extrabold text-4xl">{name}</h1>
            <h2 className="text-center pt-7 pb-3 font-bold text-xl">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <div>
                {section.map((sec, index) => {
                    return <MenuAccordions key={sec?.card?.card?.categoryId} title={sec?.card?.card?.title} itemCards={sec?.card?.card?.itemCards} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)} />
                })}
            </div>
        </div>
    )
};

export default Menu;