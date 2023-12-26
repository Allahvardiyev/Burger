import React from 'react'

const MenuITem = ({image,name,content,price}) => {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h2 style={{marginBottom:'20px'}}>{name}</h2>
        <h6 style={{marginBottom:'20px'}}>{content}</h6>
        <p>
          <i style={{color:'red'}}>{price} Tl</i></p>
    </div>
  )
}

export default MenuITem