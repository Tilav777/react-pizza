import './Header.css'
import { Link } from 'react-router-dom'
import { Context } from '../../App'
import { useContext, useState } from 'react'

// images
import icon from '../../assets/icon.svg'


function Header() {

  const { datas } = useContext(Context)

  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img src={icon} alt="icon" />
          <div>
            <h2>REACT PIZZA</h2>
            <small>самая вкусная пицца во вселенной</small>
          </div>
        </Link>
        <Link to="/basket">
          <p>520 $</p>
          <p><i className="bi bi-cart2"></i><span>{}</span></p>
        </Link>
      </header>
      <hr className='header__hr'/>
    </>
  )
}

export default Header