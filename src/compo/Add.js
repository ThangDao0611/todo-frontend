import React from "react";
import axios from "axios";
import {Input} from 'antd';

const { TextArea } = Input;

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
        docreate: "create",
        id: "",
        notekey: "",
        title: "",
        body: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(note) {
        axios
        .post("http://localhost:3030/api/note", this.state)
        .then((res) => {})
        .catch((err) => console.log(err));
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        this.setState({
        [name]: value,
        });
    }

    render() {
        return (
        <div className="add">
            <form onSubmit={this.onSubmit}>
            <label>
                <Input type="hidden" id="docreate" value={this.state.docreate} />
                <Input type="hidden" id="id" value={this.state.id} />
            </label>
            <label>
                <div style={{ marginBottom: 16 }}>
                <Input type="text"
                    id="notekey"
                    placeholder="Key"
                    value={this.state.notekey}
                    onChange={this.onChange}/>
                </div>
                <div style={{ marginBottom: 16 }}>
                <Input
                    type="text"
                    id="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                </div>
                <div style={{ marginBottom: 16 }}>
                <TextArea rows="5" cols="40" id="body" onChange={this.onChange} placeholder="Body" value={this.state.body}/>
                </div>
            </label>
            <Input type="submit" value="Submit" />
            </form>
        </div>
        );
    }
}

export default Add;
