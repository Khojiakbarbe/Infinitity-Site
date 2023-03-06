import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../images/navbar/infinityLogo.png'




function MyNavbar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container">
            <Navbar {...args} expand='lg'>
                <NavbarBrand href="/">
                    <img src={logo} className='img-fluid' />
                </NavbarBrand>
                <NavbarToggler className='bg-dark' onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <></>
                    </Nav>
                    <NavbarText>
                        <NavLink >
                            <div className="btn-group">
                                <button className="kurslarBtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kurslar
                                </button>
                                <ul className="dropdown-menu">
                                    <Link to='/dasturlash'>
                                        <li><a className="dropdown-item" >Dasturlash</a></li>
                                    </Link>
                                    <Link to='/'>
                                        <li><a className="dropdown-item" >English</a></li>
                                    </Link>
                                    <Link to='/'>
                                        <li><a className="dropdown-item" >Matematika</a></li>
                                    </Link>
                                </ul>
                            </div>
                        </NavLink>
                    </NavbarText>
                    <NavbarText>
                        <NavLink >
                            <Link to='/aboutUs'>
                                Biz haqimizda
                            </Link>
                        </NavLink>
                    </NavbarText>
                    <NavbarText>
                        <NavLink>
                            <Link to='/'>
                                Aloqa
                            </Link>
                        </NavLink>
                    </NavbarText>
                    <NavbarText style={{ width: '15%' }}>
                        <button className='applyButton'>Ro'yhatdan o'tish</button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;