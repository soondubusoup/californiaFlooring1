import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import logo from '../../assets/crown.svg'
import './navigation.style.scss'

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
          <img src = {logo} className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                GET A QUOTE
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SIGN IN
            </Link>
            <Link className='nav-link' to='/chocolate'> Chocolate </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }
export default Navigation;