import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an accout</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
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

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;