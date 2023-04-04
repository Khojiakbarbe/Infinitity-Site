import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../images/dasturlash/img1.png'
import img2 from '../../images/dasturlash/img2.png'
import img3 from '../../images/dasturlash/img3.png'
import img4 from '../../images/dasturlash/img4.png'
import img5 from '../../images/dasturlash/img5.png'
import imgReact from '../../images/dasturlash/imgReact.png'

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
                <div className="col-md-6 " style={{ paddingRight: '5%' }}>
                    <h1>Foundation</h1>
                    <h5 >Dasturlash sohasi bo’yicha hech qanday bilimga ega <br /> bo’lmagan har qanday inson dasturlash saboqlarini <br /> o’rganishi mumkin</h5>
                    <button className="batafsilBtn" onClick={() => navigate('/foundation')}>Batafsil</button>
                    <a href="https://t.me/InfinityFergana">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>

            <div className="dasturlashKurslar row">
                <div className="col-md-6 responsiveMargin" style={{ textAlign: 'left', paddingLeft: '5%' }}>
                    <h1>Frontend</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>
                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://t.me/InfinityFergana">
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
                <div className="col-md-6" style={{ paddingRight: '5%' }}>
                    <h1>Backend</h1>
                    <p>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</p>
                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://t.me/InfinityFergana">
                        <button className="batafsilBtn">
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>

            <div className="dasturlashKurslar row">
                <div className="col-md-6 responsiveMargin" style={{ textAlign: 'left', paddingLeft: '5%' }}>
                    <h1>React</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>
                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://t.me/InfinityFergana">
                        <button className="batafsilBtn" >
                            Kursga yozilish
                        </button>
                    </a>
                </div>
                <div className="col-md-6 ">
                    <img src={imgReact} style={{width:"100%"}} alt="" />
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
                        <div style={{ textAlign: 'end' }}>
                            <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                                <button>Send</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}