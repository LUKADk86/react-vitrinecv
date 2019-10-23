import React from 'react';
import {Link} from 'react-router-dom'
import {NavbarSection, Logo, Logotext, Navlistitem,Ullist, Anchor} from './style.js'


const Navbar=()=> {
  return (
    <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>
                
                <Ullist>
                    <Navlistitem><Link to="/">Home</Link></Navlistitem>
                    <Navlistitem><Anchor href="#">Work</Anchor></Navlistitem>
                    <Navlistitem><Anchor href="#">Portfolio</Anchor></Navlistitem>
                    <Navlistitem><Anchor href="#">Resume</Anchor></Navlistitem>
                    <Navlistitem><Anchor href="#">About</Anchor></Navlistitem>
                    <Navlistitem><Link to="/contact">Contact</Link></Navlistitem>
                </Ullist>
                
            </div>
            
        </NavbarSection>
  
  );
}

export default Navbar;
