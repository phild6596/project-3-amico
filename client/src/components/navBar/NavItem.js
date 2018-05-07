import React from 'react';
import './NavBar.css'
const createReactClass = require('create-react-class');

const NavItem = createReactClass({
    render: function() {
        return (
            <li><a style= {this.props.aStyle} href={this.props.href}> {this.props.title} </a></li>
        )
    }
});

export default NavItem;