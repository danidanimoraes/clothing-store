import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = "pk_test_51HYIA7Fa5NNBz4EvDJ6v9x23AYWKIGsQ8nyBZUHmUQg7pfNPxlPoilCfFDGZdhyotKWjZDQg9hm4jitSobSmQ6Hc00iioBPMul";

    const onToken = (token) => {
        alert("Payment Successful!")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        ></StripeCheckout>
    );
}

export default StripeCheckoutButton;

