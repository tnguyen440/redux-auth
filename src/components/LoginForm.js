import React, {PropTypes} from 'react';
import {Link} from 'react-router';
//import { Field, reduxForm } from 'redux-form'
import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginForm = ({onSubmit, onChange, user}) => (
   <Card className="container">
        <form action="/" onSubmit={onSubmit}>
        <CardTitle title="Login" />
        <div className="field-line">
            <TextField
                floatingLabelText="Email"
                name="email"
                onChange={onChange}
                value={user.email}
            />
        </div>

        <div className="field-line">
            <TextField
                floatingLabelText="Password"
                type="password"
                name="password"
                onChange={onChange}
                value={user.password}
            />
        </div>

        <div className="button-line">
            <RaisedButton type="submit" label="Login" primary />
        </div>

        <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link></CardText>
        </form>
   </Card>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;