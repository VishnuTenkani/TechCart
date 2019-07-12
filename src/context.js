import React, { Component } from 'react';
import {storeProduct,detailsProduct} from '../src/data'


const ProductContext =React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailsproduct:detailsProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailsProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
      }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts=[];
        storeProduct.forEach(item=>{
            const singleItem = {...item}
            tempProducts = [...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    getItem = (id) =>{
        const product= this.state.products.find(x=>x.id === id);
        return product;
    }
    handleDetails = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailsproduct:product};
        })
        
    }
    handleAddToCart = (id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.Price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        },() => { 
            this.addTotals()
        })
    }
    openModal = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increament = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>(item.id === id));
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.Price;
        this.setState(()=>{
            return {cart :[...tempCart]}
        },()=>{this.addTotals()} )
    }
    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>(item.id === id));
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count -1 ;
        if(product.count === 0){
            this.removeItem(id);
        }
        else{
        product.total = product.count * product.Price;
        this.setState(()=>{
            return {cart :[...tempCart]}
        },()=>{this.addTotals()} )
        }
    }
    removeItem = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item =>(item.id !== id));
        const index = tempProducts.indexOf(this.getItem(id));
        let removedItem = tempProducts[index];
        removedItem.inCart = false;
        removedItem.count = 0;
        removedItem.total = 0;
        this.setState(()=>{
            return {products:[...tempProducts],cart:[...tempCart]}
        },()=>{this.addTotals()});


    }
    clearCart = ()=>{
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {cartSubTotal :subTotal,cartTax:tax,cartTotal:total}
        },()=>{;
        })

    }

    render() { 
        return ( 
        <ProductContext.Provider value={{
            ...this.state,
            handleDetails:this.handleDetails,
            addToCart:this.handleAddToCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increament:this.increament,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart
        }}>
            {this.props.children}
        </ProductContext.Provider>

         );
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};