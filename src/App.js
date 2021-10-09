import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/Login/LogIn';
import NotFound from './components/Not Found/NotFound';
import OrderReview from './components/Order Review/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/orderReview'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <PrivetRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivetRoute>
            <PrivetRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivetRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
