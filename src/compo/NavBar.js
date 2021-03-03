import React, { Component } from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

class NavBar extends Component {
    render() {
        return (
        <Anchor>
            <Link href="/" title="Home"></Link>
            <Link href="/Add" title="Add"></Link>
        </Anchor>
    );
    }
}

export default NavBar;
