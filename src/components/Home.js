import React, {Component} from 'react';
import {Card, CardTitle} from 'material-ui/Card';

class Home extends Component {
    render() {
        return (
            <Card className="container">
                <CardTitle title="React Application" subtitle="This is the homepage." />
            </Card>
        );
    }
}

export default Home;