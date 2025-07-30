import useUserData from "../utils/useUserData";

const User = () => {
    const {name, location} = useUserData();
    return (
        <div className="p-2.5 border border-solid border-[#fff]">
            <h2>Functional Component</h2>
            <h2>Name: {name}</h2><br/>
            <h3>Location: {location}</h3><br/>
            <h4>Github: Ashishh24</h4>
        </div>
    )
};

export default User;