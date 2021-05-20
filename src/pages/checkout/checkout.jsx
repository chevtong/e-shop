import React from 'react'
import './checkout.styles.scss'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckuutButton from '../../components/stripe-button/stripe-button'


const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <StripeCheckuutButton price={total} />
    <div className="card-info">

      <p> <small>Testing Card Info:<br />
        Card Number: 4242424242424242 <br />
        CVC: Any 3 digits<br />
        Date: Any future date
        </small> </p>

    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);