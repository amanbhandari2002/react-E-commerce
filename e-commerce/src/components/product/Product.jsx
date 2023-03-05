import React, { useState } from 'react'
import './Product.css'
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { addToCart } from '../Redux/cartReducer';

function Product() {
  const id=useParams().id
  const {data,loading,error}=useFetch(`/products?populate=*&[filters][id][$eq]=${id}`)
  const [img,setImg]=useState('img');
  const dispatch= useDispatch()
  // console.log(data)
  const changeImg=(image)=>{
    setImg(image);
  }

  const [Quantity,setQuantity]=useState(1);


  return (
    <div className="product">
      <>
      <div className="plleft">
        <img src={process.env.REACT_APP_UPLOAD+data[0]?.attributes?.img?.data?.attributes?.url} alt=""  onClick={()=>changeImg('img')}/>
        <img src={process.env.REACT_APP_UPLOAD+data[0]?.attributes?.img2?.data?.attributes?.url} alt="" onClick={()=>changeImg('img2')} />
      </div>
      <div className="plmid">
        <img src={process.env.REACT_APP_UPLOAD+data[0]?.attributes[img]?.data?.attributes?.url} alt="" />
      </div>
      <div className="plright">
        <h1>{data[0]?.attributes?.title}</h1>
        <div className="plPrice">${data[0]?.attributes?.price}</div>
        <div className="pl-detail">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni modi laborum dolorum consectetur ipsa incidunt quisquam dolor eaque. Cum odio hic cumque magnam praesentium neque nesciunt doloribus corrupti. Sapiente deserunt nihil consequuntur explicabo rem natus labore. At expedita consectetur officia!</p>

        </div>
        <div className="pl-increment">
        <button className='symb' onClick={()=>{setQuantity(Quantity-1<0?0:Quantity-1)}}>-</button>
          <span className='quant'>{Quantity}</span>
          <button className='symb' onClick={()=>{setQuantity(Quantity+1)}}>+</button>
        </div>

        <div className="add-cart" onClick={()=>{dispatch(addToCart({
            id:data[0]?.id,
            title:data[0]?.attributes?.title,
            img:data[0]?.attributes?.img?.data?.attributes?.url,
            itemDesc:'desc',
            price:data[0]?.attributes.price,
            quantity:Quantity
          }))}}>
          <span >Add to cart</span>
          </div>
        
      </div>
      </>

    </div>
  )
}

export default Product