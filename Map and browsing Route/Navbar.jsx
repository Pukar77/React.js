import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Aboutus } from '../Aboutus/Aboutus';

export const Navbar = () => {
  return (
    <div>

<div className="navbar">
<div className="left">
    <p>We serve</p>
</div>

<div className='icon'>
    <ul>
        
        <li>  <Link to ='/'> Home </Link></li>
        <li> <Link to = '/aboutus' element = {<Aboutus/>} >About us</Link></li>
        <li>Contact us</li>
        <li>Location</li>
    </ul>
</div>

</div>



    </div>
  )
}
