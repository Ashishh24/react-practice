import { useEffect, useState } from "react";

const useUserData = () => {
    const [userData, setUserData] = useState({"name": "Dummy", "location": "India"});

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/Ashishh24");
        const json = await data.json();
        setUserData(json);
    }

    return(userData);
}

export default useUserData;