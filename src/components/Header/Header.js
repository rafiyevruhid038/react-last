import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
        <Link to="/"><h1 className='logo'>MUSTSEE</h1></Link>
    </div>
  )
}

export default Header