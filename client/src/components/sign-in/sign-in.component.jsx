import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';
import { emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailSignInStart(userCredentials.email, userCredentials.password);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={userCredentials.email}
                    required
                    handleChange={handleChange}
                    label="Email">
                </FormInput>
                <FormInput
                    type="password"
                    name="password"
                    value={userCredentials.password}
                    required
                    handleChange={handleChange}
                    label="Password">
                </FormInput>

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" isGoogleSignIn={true}
                        onClick={googleSignInStart}>Sign In With Google</CustomButton>
                </div>

            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);