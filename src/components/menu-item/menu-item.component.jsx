import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = (props) => {
    return (
        <div className={`menu-item ${props.size}`}>
            <div
                className="background-img"
                style={{ backgroundImage: `url(${props.image})` }}>
            </div>
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}