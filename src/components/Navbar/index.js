import React from 'react'
import {Nav, NavBarContainer, NavLogo} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav> 
        <NavBarContainer>
            <NavLogo to='/'>Toyota</ NavLogo>
            <h1> hi </h1>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default Navbar
