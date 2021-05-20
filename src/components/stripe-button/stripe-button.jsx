import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckuutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Isq4MDw7Xd0ownRuf5z2DpHipcjF4VIBaIYWDQXFdKfnZgmOQxHkO91kDLUGtwNMReHVHIaJHvHwkIc94Bgp2Uk0012EfbSOt'

    const onToken = token => {
        console.log(token)
        alert('payment successful')
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name = 'Clothing Store Ltd'
         currency="EUR"
         billingAddress
         shippingAddress
         image='http://svgshare.com/i/CUz.svg'
         description={`The total is ${price} euro`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )

}

export default StripeCheckuutButton