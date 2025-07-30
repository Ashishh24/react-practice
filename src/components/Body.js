import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer"

const Body = () => {
    const [resNewCard, setResNewCard] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterCard, setFilterCard] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const dataJson = await data.json();

        setResNewCard(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterCard(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resNewCard?.length === 0){
        return (<Shimmer />)
    }
    
    return (
        <div className="m-2.5">
            <div className="flex justify-between mx-5 pb-5">          
                <div className="flex gap-10 mx-auto justify-between">
                    <input className="flex w-175 p-2 border border-solid border-[#ccc] rounded-md" type="search" name="q" placeholder="Search..." autoComplete="off" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-2 py-3 border border-solid border-[#ccc] rounded-xs text-white bg-blue-500 cursor-pointer hover:bg-blue-600"
                    type="submit" onClick={(e) => {
                        const newList = resNewCard.filter((res) => {
                            const name = res?.info?.name.toLowerCase();
                            return name.includes(searchText.toLowerCase());
                        })
                        console.log(newList);
                        setFilterCard(newList);
                        setSearchText("");    
                    }}>Search</button>
                </div>
                <button className="px-2 py-3 mx-auto border border-solid border-[#ccc] rounded-xs text-white bg-blue-500 cursor-pointer hover:bg-blue-600" id="filter" onClick={() => {
                    const newList = resNewCard.filter((res) => {                        
                        return res?.info?.avgRating > 4.2;
                    })
                    setFilterCard(newList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="grid grid-cols-4 justify-center overflow-y-auto overflow-x-auto p-6 gap-4 min-w-max">
                {filterCard?.map((restaurant) => {
                    return <ResCard key={restaurant?.info?.id} resData={restaurant?.info}/>
                })}
            </div>
        </div>
    )
}

export default Body;