import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import Details from './Components/Details'
import Default  from './Components/Default'
import {Switch, Route } from 
'react-router-dom';
import Modal from './Components/Modal'
import './App.css';
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal / >
        <Footer />

     </React.Fragment>
    </div>
  );
}

export default App;
