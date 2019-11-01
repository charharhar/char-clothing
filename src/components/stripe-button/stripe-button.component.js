import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_wODsYuZ6hnOAbQvQ1FCifZu500HvSJuqe0';

  const onToken = token => {
    console.log(token);
    alert('Payment success');
  }

  return (
    <StripeCheckout
      label="Pay now"
      name="Char Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
