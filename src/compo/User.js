import React from "react";

class User extends React.Component {
    render() {
    const link_href = "/view?id=" + this.props.id;
    return (
        <tr>
            <td className="text-center">
            <a href={link_href}>{this.props.id}</a>
            </td>
            <td className="text-center">{this.props.keys}</td>
            <td className="text-center">{this.props.title}</td>
            <td className="text-center">{this.props.body}</td>
        </tr>
    );
    }
}
export default User;
