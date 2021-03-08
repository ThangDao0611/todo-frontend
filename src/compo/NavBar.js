import React, { Component} from "react";
import { Menu} from "antd";

import { HomeOutlined, PlusOutlined } from "@ant-design/icons";

//const { SubMenu } = Menu;

class NavBar extends Component {
    render() {
        return (
            <Menu theme="dark" mode="horizontal" >
                
                
                <Menu.Item key="/">
                <HomeOutlined />
                <a href="/">
                    <span>Home</span>
                </a>
                </Menu.Item>
                <Menu.Item key="/Add">
                <PlusOutlined />
                <a href="./Add">
                    <span>Add</span>
                </a>
                </Menu.Item>
                
                
            </Menu>
        );
    }
}

export default NavBar;
