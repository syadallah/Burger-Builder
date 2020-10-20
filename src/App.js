import React from 'react';
import { Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
    <div>
    <Layout />
    <Route path="/" component={BurgerBuilder}/>
    <Route path="/Checkout" component={Checkout}/>

    </div>
  );
}

export default App;
