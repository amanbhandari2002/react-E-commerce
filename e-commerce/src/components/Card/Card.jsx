import React from 'react'
import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card(props) {
    const [image,setimage]=useState(process.env.REACT_APP_UPLOAD+props.item.attributes.img.data.attributes.url)

    const newImage=()=>{
        setimage(process.env.REACT_APP_UPLOAD+props.item.attributes.img2.data.attributes.url);
      
    }

    const prevImage=()=>{
        setimage(process.env.REACT_APP_UPLOAD+props.item.attributes.img.data.attributes.url);
    }
  return (
    // <></>
    <div className='card'>
    <Link to={`/product/${props.item.id}`} className="card-link link" onMouseEnter={newImage} onMouseLeave={prevImage}>
        <img src={image} alt="" />
        { props.item.attributes.isNew && <span>Latest Arrival</span>}
        <div className='title'>{props.item.attributes.title}</div>
        <div className="prices">
            <div className="oldprice">$ {props.item?.attributes.oldPrice || props.item.attributes.price+20}</div>
            <div className="newprice">$ {props.item?.attributes.price}</div>
            
        </div>
    </Link>
    </div>
  )
}

export default Card