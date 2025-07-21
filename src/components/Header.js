import {logo} from "../utils/links";

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header;