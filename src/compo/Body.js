import React from "react";
import axios from "axios";
import UserData from "./UserData";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        users: [],
        };
    }
    componentDidMount() {
        axios
        .get("http://localhost:3030/api/note")
        .then((response) => {
            this.setState({ users: response.data });
        })
        .catch((err) => console.log(err));
    }
    render() {
        return (
        <div>
            <UserData users={this.state.users} />
        </div>
        );
    }
}

export default Body;
