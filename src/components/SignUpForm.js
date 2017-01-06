import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({onSubmit, onChange, user}) => (
  
   <Card className="container">
        <form action="/" onSubmit={onSubmit}>
        <CardTitle title="Sign Up" />

        <div className="field-line">
            <TextField
                floatingLabelText="Name"
                name="name"
                onChange={onChange}
                value={user.name}
            />
        </div>

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
            <RaisedButton type="submit" label="Create New Account" primary />
        </div>

        <CardText>Already have an account? <Link to={'/login'}>Log In</Link></CardText>
        </form>
   </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
