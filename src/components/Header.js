import { useEffect, useState } from "react";
import {logo} from "../utils/links";
import { Link } from "react-router";

const Header = () => {

    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="headerr">
            <div className="logo">
                <img className="logo-image" src={logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                </ul>
                <button className="login" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }
                }>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;