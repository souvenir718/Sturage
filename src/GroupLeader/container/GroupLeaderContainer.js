import React, { Component } from 'react';
import GroupLeader from '../view/GroupLeader';
import { inject, observer } from 'mobx-react';

@inject("Store")
@observer
class GroupLeaderContainer extends Component {
    render() {
        const subjectData = this.props.Store.leader.getSubjectData;
        return (
            <GroupLeader subjectData={subjectData}/>
        );
    }
}

export default GroupLeaderContainer;