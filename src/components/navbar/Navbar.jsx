import React from 'react'
import "./Navbar.scss"
import logo from "../../helper/logo.png"

const myNavbar = () => {
  return (
    <div className='myNavBarDiv'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>


            <div className='links'>
                <a href="#horoscope">HOROSCOPE</a>
                <a href="#daily">DAILY</a>
                <a href="#tarot">TAROT</a>
                <a href="#article">ARTICLE</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
  )
}

export default myNavbar