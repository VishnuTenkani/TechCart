import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components'

class Modal extends Component {
    state = {  }
    render() { 
        return ( 
        <ProductConsumer>
        {(value)=>{
            const {modalOpen,closeModal} = value;
            const {thumbnailUrl,title,Price,authors} = value.modalProduct;
            if(!modalOpen){
                return null;
            }
            else{
                return(
                <ModalContainer onClick={()=>closeModal()}>
                 <div className="container">
                     <div className="row">
                         <div id="modalBox" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                             <h5>Item added to cart</h5>
                             <img src={thumbnailUrl} className="img-fluid" alt={title} />
                             <h5 className="text-muted">Price : $ <strong>{Price}</strong></h5>
                             <h6 className="text-muted">Name of the author : {authors[0]}</h6>
                             <Link to="/">
                                 <ButtonContainer onClick={()=>closeModal()}>
                                     Continue to shopping
                                 </ButtonContainer>
                             </Link>
                             <Link to="/cart">
                                 <ButtonContainer cart onClick={()=>closeModal()}>
                                     Go to cart
                                 </ButtonContainer>
                             </Link>
                         </div>
                     </div>
                 </div>
                </ModalContainer>)
            }
        }}
        </ProductConsumer> );
    }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.2);
display:flex;
align-items:center;
justify-content:center

#modalBox{
    background:var(--mainwhite)
}
`
export default Modal;