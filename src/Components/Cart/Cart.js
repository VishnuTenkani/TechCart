import React, { Component } from 'react';
import TitleComponent from '../TitleComponent'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'
class Cart extends Component {
    state = {  }
    render() { 
        return ( 
        <section>
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length > 0){
                        return (
                            <React.Fragment>
                                 <TitleComponent name ="Your" title="Cart"></TitleComponent>
                                <CartColumns />
                                <CartList value={value}></CartList>
                                <CartTotals value={value} />
                            </React.Fragment>
                        )
                    }else{
                        return(
                        <React.Fragment>
                        <EmptyCart />       
                        </React.Fragment>)
                    }
                }}
            </ProductConsumer>
            
            
        </section>
        );
    }
}
 
export default Cart;