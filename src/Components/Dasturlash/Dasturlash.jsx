import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../images/dasturlash/img1.png'
import img2 from '../../images/dasturlash/img2.png'
import img3 from '../../images/dasturlash/img3.png'
import img4 from '../../images/dasturlash/img4.png'
import img5 from '../../images/dasturlash/img5.png'

export default function Dasturlash() {

    const navigate = useNavigate();

    return (
        <div className="container mb-5">
            <p className="mb-5">
                <span onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    Home
                </span>
                | Dasturlash
            </p>
            <div className="dasturlashKurslar row">
                <div className="col-md-6 responsiveMargin">
                    <img src={img1} />
                </div>
                <div className="col-md-6 ">
                    <h1>Foundation</h1>
                    <h5 >Dasturlash sohasi bo’yicha hech qanday bilimga ega <br /> bo’lmagan har qanday inson dasturlash saboqlarini <br /> o’rganishi mumkin</h5>
                    <button className="batafsilBtn" onClick={() => navigate('/foundation')}>Batafsil</button>
                    <a href="https://forms.gle/c9cbTgV2uH1mScr26">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>

            <div className="dasturlashKurslar row">
                <div className="col-md-6 responsiveMargin" style={{ textAlign: 'left' }}>
                    <h1>Frontend</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>
                    <button className="batafsilBtn">Batafsil</button>
                    <a href="https://forms.gle/c9cbTgV2uH1mScr26">
                        <button className="batafsilBtn" >
                            Kursga yozilish
                        </button>
                    </a>
                </div>
                <div className="col-md-6 ">
                    <img src={img2} alt="" />
                </div>
            </div>

            <div className="backend row">
                <div className="col-md-6 responsiveMargin">
                    <div className="backendImgs">
                        <img src={img3} alt="" />
                        <img src={img4} className='compImg' alt="" />
                    </div>
                </div>
                <div className="col-md-6 ">
                    <h1>Backend</h1>
                    <p>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>
                    <button className="batafsilBtn">Batafsil</button>
                    <a href="https://forms.gle/c9cbTgV2uH1mScr26">
                        <button className="batafsilBtn">
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>

            <div className="contactUs">
                <h5>contact</h5>
                <h1><strong>Interested in Us?</strong></h1>
                <div className="row">
                    <div className="col-md-6 p-3 border">
                        <img src={img5} alt="" />
                    </div>
                    <div className="col-md-6 contactInputs">
                        <input type="text" placeholder="Name : " />
                        <input type="number" placeholder="Number: +998 " />
                        <input type="e-mail" placeholder="E-mail : " />
                        <div style={{ textAlign: 'end' }}>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}