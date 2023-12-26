import React from 'react'
import BannerImage from '../Pictures/banner.png'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div 
      className='leftSide'
      style={{ backgroundImage: `url(${BannerImage})` }}
      >
   </div>
   <div className='rightSide'>
    <form>
      <label>Ad Soyad</label>
      <input
       type="text" 
       name='name'
       placeholder='Zəhmət olmasa adınızı və soyadızı qeyd edin...'
       />
      <label>Email</label>
      <input
       type="email" 
       name='email'
       placeholder='Zəhmət olmasa email  qeyd edin...'
       />
      <label>Messajınız</label>
      <textarea
       rows='6'
       name='message'
       placeholder='Zəhmət olmasa messajınızı  qeyd edin...'
       />
    </form>
   </div>
    </div>
  )
}

export default Contact