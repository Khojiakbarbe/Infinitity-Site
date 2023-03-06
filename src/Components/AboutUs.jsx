import React from "react";
import Aos from "aos";

import img from '../images/aboutUs/aboutUsInfinity.png'
import row from '../images/aboutUs/row.png'
import ourTeam1 from '../images/aboutUs/ourTeam1.jpg'


export default function AboutUs() {
    
    Aos.init();

    return (
        <div className="container">
            <div className="row aboutInfinity" style={{overflow:'hidden'}}>
                <div data-aos="flip-down" className="col-md-6">
                    <h1>Infinity haqida <img src={row}  /></h1>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    <p >Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites </p>
                    <p >Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                </div>
                <div data-aos="flip-up" className="col-md-6 aboutUsImg">
                    <img src={img} />
                </div>
            </div>
            <div className="mt-5" style={{overflow:'hidden'}}>
                <h4><strong>Bizning jamoa</strong></h4>
                <div className="row mt-5">
                    <div data-aos="fade-right" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                    <div data-aos="fade-down" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                    <div data-aos="fade-right" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                    <div data-aos="fade-left" className="col-md-3 mb-5">
                        <img src={ourTeam1} className='img-fluid mb-3' style={{height:'250px'}}/>
                        <h5>Owner</h5>
                        <p>info@gmail.com</p>
                        <h6>Meta & Instagram</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}