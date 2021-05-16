import './cart-dropdown.styles.scss'

import React from 'react'
import CustomButton from '../customButton/CustomButton'

const CartDropdown = ()=> (
    <div className='cart-dropdown'>
        <div className="cart-item"></div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

export default CartDropdown