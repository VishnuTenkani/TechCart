import React from 'react';
const CartItem = ({item,value}) => {
    
    
    const {id,title,thumbnailUrl,Price,total,count} = item;
    const {increament,decrement,removeItem} = value;
    
    
    return ( 
        <div className="row my-2 text-captilaze text-center
        ">
            <div className="col-10 mx-auto col-lg-2">
                <img src={thumbnailUrl} style={{width:"5rem",height:"5rem"}} className="img-fluid" alt={title} / >
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span  className="d-lg-none">Product :</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span  className="d-lg-none">Price :</span>{Price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1" >{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increament(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total}</strong>
            </div>
    
        </div>);
}
 
export default CartItem;