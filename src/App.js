
import './App.css';
import { Route, Switch } from "react-router-dom"
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import SignInPage from './pages/signInPage/SignInPage';



function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>

    </div>
  );
}

export default App;
