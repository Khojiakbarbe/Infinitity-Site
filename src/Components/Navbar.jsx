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
                            <select  className="form-select" style={{border: 'none'}} aria-label=".form-select-lg example" >
                                <option value="">Kurslar</option>
                                <option value="">Dasturlash</option>
                                <option value="">English</option>
                                <option value="">Matematika</option>
                            </select>
                        </NavLink>
                    </NavbarText>
                    <NavbarText>
                        <NavLink >
                            <Link to='/'>
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

                    <NavbarText>
                        <button className='btn btn-warning'>Apply</button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MyNavbar;