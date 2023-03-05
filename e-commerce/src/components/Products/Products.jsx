import React from 'react'
import './Products.css'
import List from '../List/List'
import { useState} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'


function Products() {
 
  const [maxPrice,setmaxPrice]=useState(10000);
  const [Sort,setSort]=useState('asc');
  const catId=parseInt(useParams().id);
  const [subCat,setsubCat]=useState([])
  const {data,loding,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)


  const handleChange=(e)=>{
    const value=e.target.value;
    const checked=e.target.checked;
    setsubCat(checked? [...subCat,value]: subCat.filter(item=>item!=value))
  }

  // console.log(data)
 


  return (
    <div className="products">
      <div className="prod-left">
        <div className="prod-catg">
          <h1 className='prods-h'>Product catogries</h1>
          {
            data.map((item)=>{
              return(
          <div className="check-bx" key={item.id}>
            <input type="checkbox" id={item.id} name={item.attributes.title} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
              ) 
            }
            )
}
  
        </div>

        <div className="filter">
          <h1 className='prods-h'>Filter By Price</h1>
          <span>0</span>
          <input type="range" min={0} max={10000} onChange={(e)=>{setmaxPrice(e.target.value)}} />
          <span>{maxPrice}</span>
        </div>
        <div className="sort">
          <h1 className='prods-h'>Sort by</h1>
          <div className="price-low">
            <input type="radio" name='price-sort' id='asc' value='asc' onChange={e=>{setSort(e.target.value)}}/>
            <label htmlFor="asc">Price (Lowets first)</label>
            
          </div>
          <div className="price-high">
            <input type="radio" id='desc' value='desc' name='price-sort' onChange={e=>{setSort(e.target.value)}} />
            <label htmlFor="desc">Price (highest first)</label>
          
          </div>
        </div>
      </div>
      <div className="prod-right">
        <div className="banner">
          <img src="https://img.freepik.com/free-vector/summer-cruise-banner-with-surfer-girl-vector-poster-with-special-offer-travel-tour-tropical-sea-with-cartoon-illustration-woman-riding-ocean-wave-surf-board_107791-5608.jpg?w=1380&t=st=1675713000~exp=1675713600~hmac=ef146c53b07ffe892cf8927110597478c0bc3146cf12616377de66cfe0a0dfc5" alt="" />
        </div>
        <div className="list">
          <List maxPrice={maxPrice} Sort={Sort} catId={catId} subCat={subCat} />
        </div> 
      </div>
    </div>
  )
}

export default Products