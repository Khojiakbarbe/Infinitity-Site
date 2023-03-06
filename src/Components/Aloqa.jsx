import React from "react";
import img from '../images/aloqa/aloqa.png'
import location from '../images/aloqa/pin.png'
import mail from '../images/aloqa/mail.png'
import tell from '../images/aloqa/smartphone.png'
import facebook from '../images/aloqa/facebook.png'
import instagram from '../images/aloqa/instagram.png'
import telegram from '../images/aloqa/tg.png'


export default function Aloqa() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row aloqaRow">
                <div className="col-md-6">
                    <img src={img} className='img-fluid' />
                </div>
                <div className="col-md-6 boglanishMalumoti">
                    <h3> Bog’lanish ma’lumotlari</h3>
                    <h5>
                        <img src={location} />
                        90 Bog’ishamol ko’chasi, Farg’ona, 100082
                    </h5>
                    <h5>
                        <img src={mail} />
                        info@gmail.com
                    </h5>
                    <h5>
                        <img src={tell} />
                        +998 99 606-43-73
                    </h5>
                    <button>
                        <img src={facebook} alt="" />
                        Facebook
                    </button>
                    <button>
                        <img src={instagram} alt="" />
                        instagram
                    </button>
                    <button>
                        <img src={telegram} alt="" />
                        telegram
                    </button>
                </div>
            </div>
            <div>
                <div className="mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d189.93264251815316!2d71.79315082454951!3d40.38841509734869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8311af83fde9%3A0xa74f0a75c2c9e2c8!2sInfinity!5e0!3m2!1sru!2s!4v1678099545999!5m2!1sru!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div >
    )
}