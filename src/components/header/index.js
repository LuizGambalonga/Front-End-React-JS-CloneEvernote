import React from "react";
import { Navbar, Column, Title } from 'rbx';
import logoImage from '../../assets/images/logo.png';
import  '../../styles/header.scss';
import {Link} from 'react-router-dom'; 

function Header(){
    return(
        <Navbar >
            <Navbar.Brand>
                <Navbar.Item >
                    <Link to="/"><img src={logoImage}/></Link>
                </Navbar.Item>
            <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment align="start">
                    <Navbar.Item>
                        <Column>
                            <Link to="/register">Registrar</Link>
                        </Column>
                    </Navbar.Item>
                    <Column >
                        <Link to="/login" className="button is-outlined is-custom-purple">Login</Link>
                    </Column>
                </Navbar.Segment>
            </Navbar.Menu>
      </Navbar>
    )
}
export default Header;