import React, { Component } from 'react';
import axios from "axios";

class Delete extends Component{

        componentDidMount() {
        let id = new URLSearchParams(window.location.search).get('id');
        axios.delete("http://localhost:3030/api/note?id=" + id,{data:{
            id: id
        }})
            .then((response) => {
            console.log(response);
            })
            .catch(err => console.log(err));
        }
    
        render(){
        return(
            <div className="result">
                <h2>Done!</h2>
            </div>
        )
        }
    
    
    }

export default Delete;