
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signInPage/SignInPage';
import { auth, createUserProfileDocument } from './firebase/Firebase.utils'
import React, { Component } from 'react'


import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
import CheckoutPage from './pages/checkout/checkout';

import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'


class App extends Component {


  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()
          })
        })

      } else {
        setCurrentUser(userAuth)
      }

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ?
                (<Redirect to='/' />)
                : (<SignInPage />)} />
        </Switch>

      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
