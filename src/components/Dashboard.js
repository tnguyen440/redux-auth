import React, {Component} from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import * as types from '../actions/actionTypes';

class Dashboard extends Component {
    render() {
        return (
            <Card className="container">
                <CardTitle title="Dashboard" />
            </Card>
        );
    }
}

export default Dashboard;
