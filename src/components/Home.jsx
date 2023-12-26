import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../Pictures/banneryeni.jpg'
import '../styles/Home.css'
const Home = () => {
  return (
     <div
      className='mainPage' 
     style={{backgroundImage:`url(${BannerImage})`}}
     >
      <div className='order'>
      <Link to='/menu'>
        <button>Sifariş Ver</button>
      </Link>
      </div>

    </div>
  )
}

export default Home