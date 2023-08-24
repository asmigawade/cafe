import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

function Home() {
  return (

    <div className='home'style={{ backgroundImage:`url(${BannerImage})` }}>
      <div className='headerContainer' 
      
      >
        <h1>Gloria Jean's</h1>
        <p>Coffee for every emotion</p>
        <Link to="/menu"> 
        <button>Order Now</button>
</Link>
       
      </div>
    </div>
  )
}


export default Home;
