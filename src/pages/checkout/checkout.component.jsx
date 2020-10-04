import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, totalPrice }) => {
    return (
        <div className="checkout-page">
            <div className="header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)
            }
            <div className="payment-bottom">
                <div className="total">
                    TOTAL: ${totalPrice}
                </div>
                <StripeCheckoutButton price={totalPrice}></StripeCheckoutButton>
            </div>

        </div>
    );
}

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice

})
export default connect(mapStatetoProps)(CheckoutPage);