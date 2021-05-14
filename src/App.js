
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Route, Switch } from "react-router-dom"
import ShopPage from './pages/shopPage/ShopPage';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;