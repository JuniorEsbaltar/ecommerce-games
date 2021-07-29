import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}