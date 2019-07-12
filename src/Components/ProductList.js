import React, { Component } from 'react';
import Product from './Product'
import TitleComponent from './TitleComponent'
import {ProductConsumer} from '../context'

class ProductList extends Component {
    state = {
        products:[]
      }
    render() { 
        return (
        // <div>
        // <Product></Product>
        // </div>
        <React.Fragment>
          <div className="py-5">
              <div className="container">
                  <TitleComponent  name="Our" title="Books"/>
                <div className="row">
                <ProductConsumer>
                    {books=>{
                        return books.products.map(product =>{
                            return <Product key={product.id} products={product} />
                        })
                    }}
                </ProductConsumer>
                </div>
                </div>
          </div>
        </React.Fragment>
        );
    }
}
 
export default ProductList;