import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="input"
                onChange={handleChange}
                {...otherProps}>
            </input>
            { label ?
                <label
                    className={`label ${otherProps.value.length > 0 ? 'shrink' : ''}`}>
                    {label}
                </label> : null}
        </div>
    );
}

export default FormInput;