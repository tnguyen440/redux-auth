import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                email:'',
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

        console.log('Email: ', this.state.user.email);
        console.log('Password: ', this.state.user.password);
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                user={this.state.user}
            />
        );
    }
}

export default LoginPage;