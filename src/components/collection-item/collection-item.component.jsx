import React from 'react';
import './collection-item.styles.scss';
import { withRouter } from 'react-router-dom';

const CollectionItem = (props) => {
    return (
        <div className="collection-item">
            <div className="background-img"
                style={{ backgroundImage: `url(${props.imageUrl})` }}>
            </div>
            <div className="footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </div>
    );
}

export default withRouter(CollectionItem)