
import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signInPage/SignInPage';
import { auth } from './firebase/Firebase.utils'
import React, { Component } from 'react'


export class App extends Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount (){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
  
      </div>
    );
  }
  
}

export default App;
