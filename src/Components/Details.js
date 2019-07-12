import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
class Details extends Component {
    state = {  }
    render() { 
        return (
        <ProductConsumer>
            {value => {
                const {id,title, publishedDate, thumbnailUrl, shortDescription, authors, Price, inCart, pageCount} = 
                value.detailsproduct;
            return (
                <div className="container py-5">
                 {/* title */}
                 <div className="row">
                     <div className="col-10 mx-auto text-center
                     text-slanted my-5 tex-blue">
                         <h2>{title}</h2>
                     </div>
                 </div>
                 {/* Endtitle */}
                 {/* Book info */}
                 <div className="row">
                   <div className="col-10 mx-auto col-md-6">
                       <img src={thumbnailUrl} alt={title}  className="img-fluid"/> 
                   </div>
                   <div className="col-10 mx-auto col-md-6
                   text-capitalize">
                    <h2>Model : {title}</h2>
                    <h5 className="text-uppercase
                    text-muted mt-2 mb-3">
                        Author Name : <span className="text-uppercase">{authors[0]}</span>
                    </h5>
                    <h5><strong>
                        Price : <span>$</span>{Price}
                        </strong>
                    </h5>
                    <h5><strong>
                        Pages Count : {pageCount}
                        </strong>
                    </h5>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Short Description about the book
                    </p>
                    <p className="text-muted lead">{shortDescription}</p>
                    {/* buttons */}
                    <Link to="/">
                        <ButtonContainer>
                            Back to Home
                        </ButtonContainer>
                    </Link>
                    <ButtonContainer cart
                    disabled={inCart?true:false}
                    onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);
                    }}>
                        {inCart?"In Cart": "Add to cart"}
                    </ButtonContainer>
                   </div>
                 </div>
                </div>
            )
            }}
        </ProductConsumer>
        );
    }
}
 
export default Details;