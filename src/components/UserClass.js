import React from "react"; 

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //state variables
            count: 0,
            userData:{
                name:"Dummy",
                location: "India"
            }
        }
        // console.log("constructor");
    }

    async componentDidMount() {
        //get called after render function
        // console.log("component mount");

        const data = await fetch("https://api.github.com/users/Ashishh24");

        const json = await data.json();
        this.setState({
            userData: json
        });
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        const {name, location} = this.state.userData;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2><br/>
                <h3>Location: {location}</h3><br/>
                <h4>Github: Ashishh24</h4>
            </div>
        )
    }
};

export default UserClass;