import User from "./User";
import UserClass from "./UserClass";
import useOnlineStatus from "../utils/useOnlineStatus";

const About = () => {
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return (
            <h1>Looks like you are offline. Please check your internet connection.</h1>
        )
    };

    return (
        <div className="about-div m-2.5">
            <h1>This is About page.</h1>
            <h2>Members: </h2>
            <User />
            {/* <UserClass /> */}
        </div>
    )
};

export default About;