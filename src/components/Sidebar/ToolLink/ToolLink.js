import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class ToolLink extends Component {

    render() {
        let tool = this.props.tool;
        return (
            <NavLink
                to={tool.path}
                className="btn-floating btn-large waves-effect waves-light blue lighten-2 tooltipped"
                data-position="right"
                data-tooltip={tool.name}
                ><i className="material-icons">{tool.icon}</i>
            </NavLink>
        );
    }
}

export default ToolLink;
