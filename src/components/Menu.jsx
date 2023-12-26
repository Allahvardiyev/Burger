import React from 'react'
import {Data} from '../helpers/Data'
import MenuITem from '../components/MenuITem'
import '../styles/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
      <h2 className='menuTitle'>Burgerlərimiz</h2>
      <div className='menuList'>
        {Data.map((menu,key)=>{
          return (
            <MenuITem
            key={key}
            image={menu.image}
            name={menu.name}
            content={menu.content}
            price={menu.Price}
             />
          )
        })}
      </div>

    </div>
  )
}

export default Menu