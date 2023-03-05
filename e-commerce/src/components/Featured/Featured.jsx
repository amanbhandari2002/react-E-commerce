import React, { useEffect } from 'react'
import useState from 'react-usestateref'
import './Featured.css'
import Card from '../Card/Card'
import useFetch from '../Hooks/useFetch'



function Featured(props) {

    const url=`/products?populate=*&[filters][type][$eq]=${props.type}`;
    const {data,loading,error}= useFetch(url);
    // const show=entire_show
    const a=[1,2,3];
    const show=data.slice(0,4);
    
  return (
    <div className="featured">
        <div className="f-top">
            <div className="f-name">
                <h1>{props.type}</h1>
                
            </div>
            <div className="f-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim tempora, ipsam earum pariatur nesciunt totam nam? Cupiditate eos quaerat magnam commodi doloremque fugit magni. Ea amet, esse nisi aliquid ad consectetur, cupiditate alias consequuntur a, modi laborum harum suscipit sint assumenda neque facere blanditiis! Similique hic provident nemo exercitationem?</p>
            </div>
        </div>

        <div className="bottom">
            {error? "error found": loading? "loading":
                show.map((item)=>{
                    return(
                    <Card key={item.id} item={item}/>
                    )
                }) 
            }
        </div>
    </div>
  )
}

export default Featured