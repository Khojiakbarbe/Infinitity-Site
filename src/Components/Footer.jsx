import React from "react";
import logo from '../images/navbar/infinityLogo.png'
import location from '../images/home/location.png'
import facebook from '../images/footer/facebook.png'
import instagram from '../images/footer/instagram.png'
import twitter from '../images/footer/twitter.png'
import telegram from '../images/footer/telegram.png'


export default function Footer() {
    return (
        <div className='footer'>
            <div 
            data-aos="fade-down"
                // data-aos-duration="8000"
                className="container row p-5" style={{ margin: '0 auto', overflow:'hidden' }}>
                <div className="col-md-2">
                    <h5><strong>Dasturlash</strong></h5>
                    <p>FrontEnd</p>
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
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={telegram} alt="" />
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
        </div>
    )
}