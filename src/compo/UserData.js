import React from 'react';
import User from './User'

class UserData extends React.Component {
    render() {
    const data = this.props.users;
    const display = data.map(user => {
    return (
        <User
            id={user.id}
            keys={user.key}
            title={user.title}
            body={user.body}
        />
        );
    });

    return (
        <table className="table table-striped table-inverse">
        <thead>
            <tr>
                <th>Id</th>
                <th>Key</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>{display}</tbody>
        </table>
    );
    }
}
export default UserData;
