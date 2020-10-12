import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spiner.styles';

const WithSpinner = (WrappedComponent) => {
    return ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
            :
            <WrappedComponent {...otherProps}></WrappedComponent>
    }
}

export default WithSpinner;