import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';
import './sign-up.styles.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        this.props.signUp({ displayName, email, password, confirmPassword });

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={this.state.displayName}
                        required
                        handleChange={this.handleChange}
                        label="Name">
                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label="Email">
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label="Password">
                    </FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        required
                        handleChange={this.handleChange}
                        label="Confirm Password">
                    </FormInput>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUp: (userData) => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);