import React from 'react'
import Slider from '../Slider/Slider'
import Featured from '../Featured/Featured'
import Catagories from '../Catagories/Catagories'
import './Home.css'

function Home() {
  return (
    <div className="home">
    <Slider/>
    <Featured type={'Featured'} />
    <Catagories/>
    <Featured type={'Trending'} />

    </div>
  )
}

export default Home