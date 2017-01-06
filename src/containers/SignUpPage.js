import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm';

class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email:'',
                name: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    processForm(event) {
        event.preventDefault();

        console.log('Name: ', this.state.user.name);
        console.log('Email: ', this.state.user.email);
        console.log('Password: ', this.state.user.password);
        console.log('User: ', this.state.user);
    }

    render() {
        return (
            <SignUpForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                user={this.state.user}
            />
        );
    }
}

export default SignUpPage;
