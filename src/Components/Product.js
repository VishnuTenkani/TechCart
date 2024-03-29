import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types'


class Product extends Component {
    state = {  }
    
    render() { 
        const {id,title,thumbnailUrl,Price,inCart} = this.props.products;
        return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => { value.handleDetails(id) }}>
                                <Link to="/details">
                                    <img src={thumbnailUrl} alt={title}
                                        className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true : false}
                                    onClick={() => { value.addToCart(id);
                                                     value.openModal(id); 
                                                   }}>
                                    {inCart ? (<p className="mb-0" disabled>In cart</p>) : <i className="fas fa-shopping-cart" />}
                                </button>

                            </div>
                        )}
                
                </ProductConsumer>
                {/* card footer */}
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0 font-bold" >{title}</p>
                    <h5 className="font-italic mb-0">
                        <span className="mr-1">$</span>
                        {Price}
                    </h5>

                </div>
                
            </div>

        </ProductWrapper>);
    }
}

Product.propTypes={
    products:PropTypes.shape({
        _id:PropTypes.number,
        title:PropTypes.string,
        thumbnailUrl:PropTypes.string,
        Price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}
const ProductWrapper = styled.div`
  .card{
      border-color:transparent;
      transition:all 0.5 linear;
  }
  .card-footer{
      background:transparent;
      border-top:transparent;
      transition:all 0.5 linear;
  }
  &:hover{
      .card{
          border:0.04rem solid rgba(0,0,0,0.2);
          box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
      }
      .card-footer{
          background:rgba(247,247,247)
      }
  }
  .img-container{
      position:relative;
      overflow:hidden;
  }
  .card-img-top{
      transition:all 1s linear;
  }
  .img-container:hover .card-img-top{
      transform:scale(1.1);
  }
  .cart-btn{
      position:absolute;
      bottom:0;
      right:0;
      padding: 0.2rem 0.4rem;
      background:var(--mainblue);
      border:none;
      color:var(--mainwhite);
      font-size:1.3rem;
      border-radius: 0.5rem 0 0 0;
      transform:translate(100%, 100%);
      transition:all 1s linear;
  }
  .img-container:hover .cart-btn{
    transform:translate(0,0);
    cursor:pointer;
  }

  
`
export default Product;