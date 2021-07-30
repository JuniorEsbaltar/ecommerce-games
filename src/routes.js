import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AfterCheckout from './pages/AfterCheckout';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <div className="mb-20">
        <Header />
      </div>
      <div className="body">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/thank-you" component={AfterCheckout} />
        </Switch>
      </div>
      <div className="mt-10 footer">
        <Footer />
      </div>
    </BrowserRouter>
  )
}