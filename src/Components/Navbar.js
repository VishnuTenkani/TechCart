import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.png'
import {ButtonContainer} from './Button'
import styled from 'styled-components';
import {ProductConsumer} from '../context';

const imgStyle = {
    width:'70px',
    
  };
class Navbar extends Component {
    state = {  }
    
    render() { 
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px=sm-5">
                <Link to="/">
                    <img src={logo} alt="Techy Cart" className="navbar-brand"  style={imgStyle}/>
                </Link>
                <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                </li>
                </ul>
                
                
                    <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length > 0){
                        return (
                            <Link to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <span className="mr-2">
                                <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                                </span>My cart
                                <span className="badge">{cart.length}</span>
                            </ButtonContainer>
                            </Link>  )
                    }else{
                        return (<Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-shopping-cart" aria-hidden="true"></i>
                            </span>My cart
                            
                        </ButtonContainer>
                        </Link>)
                    }
                }}
            </ProductConsumer>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainblue);
.nav-link{
    font-size:1.3rem !important;
    color:var(--mainwhite) !important;
    text-transform:capitalize;
}
`
 
export default Navbar;