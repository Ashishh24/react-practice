import React from "react";
import ReactDOM from "react-dom/client";
/*
- Header
    - Logo
    - Navbar
        - Home
        - About
        - Contact Us
        - Cart
- Body
    - Search Bar
    - Restaurant List
        - Restaurant Cards
            - Name
            - Rating, delivery time
            - Address
- Footer
    - Copyright

*/


const Header = () => {
    return(
        <div className="headerr">
            <div className="logo">
                <img className="logo-image" src="https://i.pinimg.com/736x/1c/f7/78/1cf77884ef836c0c792970a1467533ca.jpg" alt="logo"/>
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

const ResCard = (props) => {
    const {resData} = props;
    const {src, name, rating, time, address} = resData;
    return (
        <div className="res-cards">
            <img className="res-logo" src={src}/>
            <h3>{name}</h3><br/>
            <div className="rating-time">
                <p className="resRating">⭐{rating}</p>
                <p> | </p>
                <p className="deliveryTime">{time} mins</p>
            </div><br/>
            <p className="resAddress">{address}</p>
        </div>
    )
}

const resList = [
    {
        id: 1,
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b5b43c63-0325-406e-8d3a-315b8f6eca5c_445763.jpg",
        name: "Burger King",
        rating: 4.4,
        time: 35,
        address: "Dwarka Sector 7"
    },
    {
        id: 2,
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG",
        name: "KFC",
        rating: 4.3,
        time: 40,
        address: "Dwarka Sector 12"
    },
    {
        id: 3,
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/wso91d2j7kk7xujnllqx",
        name: "Pind Balluchi",
        rating: 3.9,
        time: 50,
        address: "Dwarka Sector 9"
    },
    {
        id: 4,
        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqinz4rdvxbexou7df1h",
        name: "Sagar Ratna",
        rating: 4.6,
        time: 30,
        address: "Palam"
    },
    
]

const Body = () => {
    return (
        <div className="body">
            <form action="/search" method="GET" className="search-bar">
                <input type="search" name="q" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
            {/* <div className="resMain">
                Restaurant
                <ResCard src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b5b43c63-0325-406e-8d3a-315b8f6eca5c_445763.jpg" name="Burger King" rating ="4.4" time="35" address="Dwarka Sector 7" />
                <ResCard src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/487a52e2-2ee9-482f-90eb-2054de4a079a_514911.JPG" name="KFC" rating ="4.3" time="40" address="Dwarka Sector 12" />
                <ResCard src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/wso91d2j7kk7xujnllqx" name="Pind Balluchi" rating ="3.9" time="45" address="Dwarka Sector 9" />
                <ResCard src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqinz4rdvxbexou7df1h" name="Sagar Ratna" rating ="4.6" time="30" address="Palam" />
            </div> */}
            {/* above one is by passing all props manually */}
            {/* OR */}
            {/* below one is by using list of object and passing all props using map() */}
            <div className="resMain">
                {resList.map((restaurant) => (
                    <ResCard key={restaurant.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}


const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2025 Ashish Anand. All rights reserved.</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Header/>
        <Body />
        <Footer />
    </>
);