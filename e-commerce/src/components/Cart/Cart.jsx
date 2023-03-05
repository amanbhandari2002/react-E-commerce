import React, { useState } from "react";
import './Cart.css';
import { ImCross } from 'react-icons/im'
import {useDispatch, useSelector} from 'react-redux';
import { removeItem, resetCart } from "../Redux/cartReducer";

function Cart() {
    
    const products= useSelector(state=>state.cart.products)
    const dispatch=useDispatch()
    const totalPrice=()=>{
        let total=0;
        products.forEach((item)=>{total+=item.price*item.quantity})
        return total
    }
    
    return (
        <div className="cart">
            <h2>Product in your cart</h2>
            {products.map((item)=>{
                return(
            <div className="cart-detail" key={item.id}>
                <div className="cart-left">
                    <img src={process.env.REACT_APP_UPLOAD+item.img} alt="" />
                </div>
                <div className="cart-mid">
                    <div className="cart-prodName">
                        <span>{item.title}</span>
                    </div>
                    <div className="cart-ProdInfo">
                        <span>{item.itemDesc.substring(0,100)}</span>
                    </div>
                    <div className="cart-price">{item.price}</div>
                </div>
                <div className="cart-right">
                    <div className="cart-itemDelete" onClick={()=>{dispatch(removeItem(item.id))}}><ImCross/></div>
             
                </div>
            </div>

            )})}
            <div className="cart-total">
                <span>SubTotal</span>
                <span>${totalPrice()}</span>
            </div>

            <div className="cart-procceed">
                <button>Procceed to pay</button>

            </div>
            <div className="cart-reset" onClick={()=>dispatch(resetCart())}>
                <span>Reset cart</span>
            </div>
        </div>

    )


}

export default Cart;