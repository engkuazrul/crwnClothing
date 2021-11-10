import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JGEnmGrKhaYnBjQ2vOPAKDzFjtQE2ysUUGfWAw1ItoqRIHb1p4l46EAJB9bPftWqnXS9pL6OsnJZbLI6ib1ZZCB00oyeASv0h';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

   return (
     <StripeCheckout 
      label='Pay Now'
      name='HI Style'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
     />
   );
};

export default StripeCheckoutButton;