import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/navbar/infinityLogo.png'
import location from '../images/home/location.png'
import facebook from '../images/footer/facebook.png'
import instagram from '../images/footer/instagram.png'
import telegram from '../images/footer/telegram.png'

import bg from '../images/footer/bgFooter.png'

export default function Footer() {


    return (
        <div className='footer'>
            <div
                data-aos="fade-down"
                className="container row p-5" style={{ margin: '0 auto', overflow: 'hidden' }}>
                <div className="col-md-2">
                    <h5><strong>Dasturlash</strong></h5>
                    <Link to="/dasturlash"><p> FrontEnd </p></Link>
                    <p>BackEnd</p>
                    <p>Foundation</p>
                    <p>Ux & Ui dizayn</p>
                    <p>Veb dizayn</p>
                </div>
                <div className="col-md-2">
                    <h5><strong>Ingliz tili</strong></h5>
                    <p>English for kids</p>
                    <p>General english</p>
                    <p>English for IT</p>
                    <p>IELTS</p>
                </div>
                <div className="col-md-2">
                    <h5><strong>Matematika</strong></h5>
                    <p>Mental arifmetika</p>                    
                    <p>Math for kids</p>
                    <p>Math for students</p>
                </div>
                <div className="col-md-6" style={{ paddingLeft: '10%' }} >
                    <img src={logo} />
                    <p>
                        <img src={location} style={{ width: '8%' }} className='p-2' />
                        Ташкент г, площадь Хадра, улица Себзор
                    </p>
                    <div className="messengers">
                        <a href="https://www.facebook.com/xojiakbar.nosiraliyev?mibextid=ZbWKwL">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://www.instagram.com/khojiakbarbek/">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://t.me/Jaloliddin_usm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                        </a>
                        <a href="https://t.me/InfinityFergana">
                            <img src={telegram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div data-aos="zoom-out" className="container row">
                <div className="col-md-6">
                    <p>© 2022. All rights reserved</p>
                </div>
                <div className="col-md-6 ">
                    <p className="text-end">+998 (71) 200-11-23</p>
                </div>
            </div>
            <div className="bg">
                <img src={bg} alt="" />
            </div>
        </div>
    )
}