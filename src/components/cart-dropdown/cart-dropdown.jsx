import './cart-dropdown.styles.scss'

import React from 'react'
import CustomButton from '../customButton/CustomButton'

import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {cartItems.map(cartItem => (<CartItem  item={cartItem}/>))}
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)