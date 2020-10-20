import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
    <div>
    <Layout />
    <Switch>
    <Route path="/" excat component={BurgerBuilder}/>
    <Route path="/checkout" component={Checkout}/>
    </Switch>
    </div>
  );
}

export default App;
