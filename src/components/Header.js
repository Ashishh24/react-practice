import { useEffect, useState } from "react";
import {logo} from "../utils/links";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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