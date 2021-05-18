import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import { createStructuredSelector } from 'reselect'
import { selectCartItemCount } from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);