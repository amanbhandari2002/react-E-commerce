import React, { useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';



function Header() {
  const [showCart,setcart]=useState(false);
  const [Key,setKey]=useState(0);
  const products= useSelector(state=>state.cart.products)

  const dispatch=useDispatch()
  return (
    <div className='header'>
      <div className="wraper">
        <div className="left">
          <div className="item">
            <span>USD</span>
            <BiChevronDown />
          </div>

          <div className="item">
            <Link className='link' to={'/products/2'}>Men</Link>
          </div>
          <div className="item">
          <Link className='link' to={'/products/1'}>Women</Link>
          </div>
          <div className="item">
          <Link className='link' to={'/products/3'}>Children</Link>
          </div>
          <div className="item">
          <Link className='link' to={'/products/4'}>Accessories</Link>
          </div>

        </div>
        <div className="mid">
          <Link className='link' to={'/'}>MY-STORE</Link>
        </div>
        <div className="right">
          <div className="item "><Link className='link' to={'/'}>Home</Link></div>
          <div className="item "><Link className='link' to={'/'}>About</Link></div>
          <div className="item "><Link className='link' to={'/'}>Contact</Link></div>
          <div className="item "><Link className='link' to={'/'}>Stores</Link></div>
          <BiSearch />
          <BsPerson />
          <AiOutlineHeart />
          <div className="cart-icon" onClick={()=>{setcart(showCart?false:true); setKey(Key+1)}}>
          <FiShoppingCart />
          <span>{products.length}</span>
          </div>
        </div>
      </div>
      {showCart?<Cart key={Key}/>:null}
    </div>
    
  )
}

export default Header