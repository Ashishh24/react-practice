import { useEffect, useState } from "react";
import {resList} from "../utils/data";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer"

const Body = () => {
    const [resNewCard, setResNewCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const dataJson = await data.json();

        setResNewCard(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resNewCard.length === 0){
        return (<Shimmer />)
    }
    return (
        <div className="body">
            <div className="body-div">          
                <form action="/search" method="GET" className="search-bar">
                    <input type="search" name="q" placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
                <button id="filter" onClick={() => {
                    const newList = resNewCard.filter((res) => {
                        return res.avgRating > 4.5;
                    })
                    setResNewCard(newList);
                    console.log(resNewCard);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="resMain">
                {resNewCard.map((restaurant) => {
                    console.log(restaurant);
                    console.log(restaurant?.info?.id);
                    console.log(restaurant?.info);
                    return <ResCard key={restaurant?.info?.id} resData={restaurant?.info}/>
                })}
            </div>
        </div>
    )
}

export default Body;