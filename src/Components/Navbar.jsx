import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
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
                <NavbarBrand >
                    <Link to='/'>
                        <img src={logo} className='img-fluid' />
                    </Link>
                </NavbarBrand>
                <NavbarToggler className='border bg-white' onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar></Nav>
                    <NavbarText>
                        <div className="btn-group">
                            <button className="kurslarBtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Kurslar
                            </button>
                            <ul className="dropdown-menu">
                                <Link to='/dasturlash'>
                                    <li><a className="dropdown-item" >Dasturlash</a></li>
                                </Link>
                                <Link to='/english'>
                                    <li><a className="dropdown-item" >English</a></li>
                                </Link>
                                <Link to='/rustili'>
                                    <li><a className="dropdown-item" >Rus tili</a></li>
                                </Link>
                                <Link to='/matematika'>
                                    <li><a className="dropdown-item" >Matematika</a></li>
                                </Link>
                            </ul>
                        </div>
                    </NavbarText>
                    <NavbarText className='navbarLinks'>
                        <Link to='/aboutUs'>
                            Biz haqimizda
                        </Link>
                        <a href='#gallery'>
                            Gallereya
                        </a>
                        <Link to='/'>
                            O'zingizni sinang
                        </Link>
                        <Link to='/aloqa'>
                            Aloqa
                        </Link>
                    </NavbarText>
                    <NavbarText style={{ width: '15%' }}>
                        <a href="https://t.me/InfinityFergana">
                            <button className='applyButton' >
                                Ro'yhatdan o'tish
                            </button>
                        </a>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;