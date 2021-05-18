

import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton'
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

import { createStructuredSelector } from 'reselect'


const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">

            {cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : (<span className='empty-message'>Your cart is empty</span>)
            }

        </div>
        <CustomButton onClick={() => history.push('/checkout')}>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);