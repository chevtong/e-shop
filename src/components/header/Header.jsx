import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/Firebase.utils'

import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'

function Header({ currentUser, hidden }) {
    return (
        <div className='header'>

            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            
            <div className="options">

                <Link className='option' to='/shop'>SHOP</Link>

                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>)}

                <CartIcon />
            </div>

            {hidden ? null : <CartDropdown />}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)