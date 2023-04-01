import React from "react";
import './contactForm.css';
import hat from './images/hat.png'
import thing from './images/thing.png'
import house from './images/house.png'
import rightTree from './images/rightTree.png'
import sky from './images/sky.png'


export const ContactForm = () => {
    return (
        <div className="contact-form">
            <img className="left" src={house} />
            <img className="right" src={rightTree} />
            <img className="top-left" src={sky} />
            <form>
                <img className="top-left" src={thing} alt="щепки" />
                <h2>
                    Хотите с нами сотрудничать?
                </h2>
                <p>
                    Заполните форму и мы перезвоним вам в течение 30 минут!
                </p>
                <input placeholder="Ваше имя" />
                <input placeholder="Номер телефона" type="tel" />
                <textarea className="input" placeholder="Ваше сообщение (необязательно)" />
                <button>Отправить</button>
                <img className="bottom-right" src={hat} />
            </form>
        </div>
    );
}
 
export default ContactForm;