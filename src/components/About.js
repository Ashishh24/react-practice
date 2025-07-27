import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-div">
            <h1>This is About page.</h1>
            <h2>Members: </h2>
            {/* <User /> */}
            <UserClass />
        </div>
    )
};

export default About;