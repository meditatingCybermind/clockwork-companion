import React, { Component } from 'react';

import ToolLink from './ToolLink/ToolLink'

const tools = [
    {
        name: "Home",
        path: "/",
        icon: "home"
    },
    {
        name: "Roller",
        path: "/roll",
        icon: "done"
    },
    {
        name: "Sub",
        path: "/sub",
        icon: "https"
    }
];

class Sidebar extends Component {
    render () {
        return (
                <div className="Sidebar">
                        <div>
                            <ul>
                                { tools.map((tool, index) =>
                                    <li key={index}>
                                        <ToolLink tool={tool}/>
                                    </li>
                                )}
                            </ul>
                        </div>
                </div>
        )
    }
}

export default Sidebar;
