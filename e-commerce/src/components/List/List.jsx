import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.css'
import useFetch from '../Hooks/useFetch'

function List(props) {

    const {data,loading,error}= useFetch(`/products?populate=*&[filters][categories][id][$eq]=${props.catId}${props.subCat.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`).join('')}&[filters][price][$lte]=${props.maxPrice}&sort=price:${props.Sort}`)


    // console.log(data)


  return ( 
    <div className="list">
        {loading? 'Loading' : data.map((item)=>{
            return(
            <Card  item={item} key={item.id}/>
            ) 
        })} 
        
    </div>
  )
}

export default List