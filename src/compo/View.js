import React, { Component } from 'react';
import axios from "axios";
import UserData from "./UserData";

class Views extends Component {
        constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        }
        componentDidMount() {
        let id = new URLSearchParams(window.location.search).get('id');
        axios.get("http://localhost:3030/api/note?id=" + id)
            .then(response => {
            this.setState({ users: response.data });
            })
            .catch(err => console.log(err));
        }
        render() {
        let id = new URLSearchParams(window.location.search).get('id');
        let link_del = "/delete?id=" + id;
        let link_edit = "/edit?id=" + id;
        return (
            <div>
            <UserData users={this.state.users} />
            <a href={link_del} >Delete</a><br />
            <a href={link_edit}>Edit</a>
            </div>
        )
        }
    }

export default Views;