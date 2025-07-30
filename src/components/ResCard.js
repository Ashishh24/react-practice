import { Link } from "react-router-dom";
import {resLogo} from "../utils/links";

const ResCard = (props) => {    
    const {resData} = props;

    if (!resData) return null; // Safely skip rendering if data is missing

    const deliveryTime = resData.sla?.slaString;
    
    const {cloudinaryImageId, name, avgRating, areaName} = resData;
    return (
        <Link to={"/restaurant/"+resData.id}><div className="p-3 m-1.25 w-90 flex-shrink-0 hover:border hover:border-solid hover:border-[#ccc] hover:cursor-pointer hover:shadow-gray-400">
            <img className="res-logo w-[100%]" src={resLogo+cloudinaryImageId}/>            
            <h3>{name}</h3><br/>
            <div className="flex items-center">
                <p className="resRating">⭐{avgRating}</p>
                <p> | </p>
                <p className="deliveryTime my-auto">{deliveryTime}</p>
            </div><br/>
            <p className="resAddress">{areaName}</p>
        </div></Link>
    )
}

export default ResCard;