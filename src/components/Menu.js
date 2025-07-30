import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";

const Menu = () => {
    const [resInfo, setResInfo] = useState([]);
    const [filResInfo, setFilResInfo] = useState([]);
    const {resID} = useParams();

    const fetchMenu = async () => {
        const resAPIURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`;
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch(resAPIURL);
        const dataJson = await data.json();
        setResInfo(dataJson?.data);
        setFilResInfo(dataJson?.data);
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
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;      
    
    // console.log(itemCards);
    
    return (
        <div className="w-[90%] my-2.5 mx-auto justify-center p-1.25 max-h-[100%] overflow-hidden box-border">
            <h1 className="text-center p-2.5">{name}</h1>
            <h2 className="p-2.5">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <h2 className="p-2.5">Menu:</h2>
            <div className="menu-card mt-5 w-[100%] p-2.5">
                {itemCards?.map((item) => {
                    return <MenuCard key={item?.card?.info?.id} itemData={item?.card?.info}/>
                })}
            </div>
        </div>
    )
};

export default Menu;