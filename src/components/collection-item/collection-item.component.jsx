import React from 'react';
import './collection-item.styles.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = (props) => {
    return (
        <div className="collection-item">
            <div className="background-img"
                style={{ backgroundImage: `url(${props.item.imageUrl})` }}>
            </div>
            <div className="footer">
                <span className="name">{props.item.name}</span>
                <span className="price">{props.item.price}</span>
            </div>
            <CustomButton inverted="true" onClick={() => props.addCartItem(props.item)}>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCartItem: (item) => dispatch(addCartItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CollectionItem)