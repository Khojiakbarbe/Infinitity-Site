import React from "react";
import Aos from "aos";

import img from '../images/aboutUs/aboutUsInfinity.png'
import row from '../images/aboutUs/row.png'


// Teachers
import abdushukur from '../images/teachers/abdushukur.jpg'
import lochin from '../images/teachers/lochin.jpg'
import jaloldin from '../images/teachers/jaloldin.jpg'

export default function AboutUs() {

    Aos.init();

    return (
        <div className="container">
            <div className="row aboutInfinity" style={{ overflow: 'hidden' }}>
                <div data-aos="fade-down" className="col-md-6">
                    <h1>Infinity haqida <img src={row} /></h1>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    <p >Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites </p>
                    <p >Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                </div>
                <div data-aos="fade-up" className="col-md-6 aboutUsImg">
                    <img src={img} />
                </div>
            </div>
            <div className="mt-5" style={{ overflow: 'hidden' }}>
                <h4><strong>Bizning jamoa</strong></h4>
                <div className="row mt-5">
                    <div data-aos="fade-right" className="col-md-3 mb-5">
                        <img src={lochin} className='w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Mirzayev Lochin</h5>
                        <p>Direktor</p>
                        <a href="https://t.me/Lochin10">
                            <h6>Aloqa</h6>
                        </a>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-5">
                        <img src={abdushukur} className='w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Abdushukur O'rinboyev</h5>
                        <p>Dasturlash o'qituvchisi</p>
                        <a href="https://t.me/Abdushukur_Urinboev">
                            <h6>Aloqa</h6>
                        </a>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-5">
                        <img src={jaloldin} className='w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Usmanobv Jaloliddin</h5>
                        <p>Administrator</p>
                        <a href="https://t.me/Jaloliddin_usm">
                            <h6>Aloqa</h6>
                        </a>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 mb-5">
                        <img  className='border w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Mirzayeva Gulchehr</h5>
                        <p>IELTS teacher</p>
                    </div>
                    <div data-aos="fade-right" className="col-md-3 mb-5">
                        <img  className='border w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Mamajonova Hulkaroy</h5>
                        <p>IELTS teacher</p>
                    </div>
                    <div data-aos="fade-right" className="col-md-3 mb-5">
                        <img  className='border w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Solijonova Gulhayo</h5>
                        <p>Kids teacher</p>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 mb-5">
                        <img  className='border w-100 mb-3' style={{ height: '250px' }} />
                        <h5>Halilova Mavluda</h5>
                        <p>Matematika o'qituvchisi</p>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 mb-5">
                        <img  className='border w-100 mb-3' style={{ height: '250px' }} />
                        
                        <p>Rus tili o'qituvchisi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}