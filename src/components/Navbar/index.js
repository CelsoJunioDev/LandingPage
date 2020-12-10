import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './styles';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>

          <NavLogo
            to='home'
            smooth={true}
            duration={500}
            exact="true"
            offset={-80}
          ><MdComputer size={40} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >Contact</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to='contact'
                smooth={true}
                duration={1000}
                exact="true"
                offset={-80}
              >Contact</NavLinks>
            </NavItem> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
