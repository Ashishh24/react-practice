import { Link } from "react-router-dom";
import {resLogo} from "../utils/links";

const ResCard = (props) => {    
    const {resData} = props;

    if (!resData) return null; // Safely skip rendering if data is missing

    const deliveryTime = resData.sla?.slaString;
    
    const {cloudinaryImageId, name, avgRating, areaName} = resData;
    return (
        <div className="res-cards">
            <img className="res-logo" src={resLogo+cloudinaryImageId}/>            
            <Link to={"/restaurant/"+resData.id}><h3>{name}</h3><br/></Link>
            <div className="rating-time">
                <p className="resRating">⭐{avgRating}</p>
                <p> | </p>
                <p className="deliveryTime">{deliveryTime}</p>
            </div><br/>
            <p className="resAddress">{areaName}</p>
        </div>
    )
}

export default ResCard;