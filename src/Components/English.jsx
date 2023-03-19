import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../images/English/img1.png'
import img2 from '../images/English/img2.png'
import img3 from '../images/English/img3.png'
import img4 from '../images/English/img4.png'


export default function English() {

    const navigate = useNavigate();

    return (
        <div className="container mb-5 mt-5">
            <div className="englishCourse row ">
                <div className="col-md-6">
                    <img src={img1} alt="" />
                </div>
                <div className="col-md-6 p-5 responsiveMargin" style={{paddingLeft:'6%'}}>
                    <h1>General English</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
            <div className="englishCourse row ">
                <div className="col-md-6 pb-5 text-start responsiveMargin" style={{paddingLeft:'6%'}}>
                    <h1>IELTS</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
                <div className="col-md-6">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="englishCourse row">
                <div className="col-md-6">
                    <img src={img3} alt="" />
                </div>
                <div className="col-md-6 pb-5 responsiveMargin" style={{paddingLeft:'6%'}}>
                    <h1>CEFR</h1>
                    <h5>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday inson dasturlash saboqlarini o’rganishi mumkin</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
            </div>
            <div className="englishCourse row ">
                <div className="col-md-6 pb-5 text-start responsiveMargin" style={{paddingLeft:'6%'}}>
                    <h1>KIDS English</h1>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates!</h5>

                    <button className="batafsilBtn" onClick={() => navigate('/aloqa')}>Batafsil</button>
                    <a href="https://forms.gle/o3JjMAxcQf1HyY3Z9">
                        <button className="batafsilBtn" style={{ marginLeft: '2%' }}>
                            Kursga yozilish
                        </button>
                    </a>
                </div>
                <div className="col-md-6">
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}