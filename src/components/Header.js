import { useEffect, useState } from "react";
import { logo } from "../utils/links";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between">
            <div className="logo">
                <img className="w-25" src={logo} alt="logo"/>
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">{onlineStatus ? "🟢": "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-5 cursor-pointer py-3 ml-10 border border-solid border-[#ccc] text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;