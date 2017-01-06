import React, {Component} from 'react';
import {Card, CardTitle} from 'material-ui/Card';

class NotFoundPage extends Component {
    render() {
        return (
            <Card className="container">
                <CardTitle title="404 - Page not found"/>
            </Card>
        );
    }
}

export default NotFoundPage;
