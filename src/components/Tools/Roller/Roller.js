import React, { Component } from 'react';

import SkillTable from './SkillTable/SkillTable'
import RollResults from './RollResults/RollResults'

class Roller extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <SkillTable/>
                    </div>
                    <div className="col s12 m6">
                        <RollResults/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Roller;
