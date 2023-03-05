import React from 'react'
import './Catagories.css'
import { Link } from 'react-router-dom'
function Catagories() {
  return (
    <div className="catogries">
        <div className="cat-left">
            <div className="col">
                <img src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="cat-link">
                    <Link className='link' to={'/products/1'}>SALE</Link>
                </div>
            </div>
            <div className="col">
                <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="cat-link">
                    <Link className='link' to={'/product'}>WOMEN</Link>
                </div>
            </div>
        </div>
        <div className="cat-mid">

            <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="cat-link">
                    <Link className='link' to={'/product'}>NEW SEASON</Link>
                </div>
        </div>
        <div className="cat-right">
            <div className="cat-upper">
                <div className="col">
                    <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className="cat-link">
                    <Link className='link' to={'/product'}>MEN</Link>
                </div>
                </div>
                <div className="col">
                    <img src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <div className="cat-link">
                    <Link className='link' to={'/product'}>ACCESSORIES</Link>
                </div>
                </div>
            </div>
            <div className="cat-lower">
                <img src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="cat-link">
                    <Link className='link' to={'/product'}>SHOES</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagories