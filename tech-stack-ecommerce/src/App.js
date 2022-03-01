import './App.css';
import Header from './Components/Fragments/Header/Header';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useEffect } from "react";
import { authentication, onAuthStateChangedV } from "./firebase";
import { useStateValue } from "./StateProvider";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Checkout from './Components/Pages/Checkout/Checkout';
import Orders from './Components/Pages/Orders/Orders';
import Payment from './Components/Pages/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51KQBYKSEWO8gM0N1IzCg65DS5Rr3RX9KXsxXDPFnGeMFZT3KkTTuxUeTEkM3yxjjfPoTUyJwQc4eW0kE295Pees600VlPc6UmR');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChangedV(authentication, user => {
      console.log(user);

      if (user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
