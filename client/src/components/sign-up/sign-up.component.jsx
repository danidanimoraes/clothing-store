import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUp }) => {
    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        signUp({ displayName, email, password, confirmPassword });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    required
                    handleChange={handleChange}
                    label="Name">
                </FormInput>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    required
                    handleChange={handleChange}
                    label="Email">
                </FormInput>
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="Password">
                </FormInput>
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                    handleChange={handleChange}
                    label="Confirm Password">
                </FormInput>
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    signUp: (userData) => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);