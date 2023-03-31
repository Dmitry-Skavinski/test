import React from "react";
import './blogCase.css';
import lockIcon from './images/lock.svg';
import gift from './images/gift.png';
import topHouse from './images/topHouse.png';

export const BlogCase = () => {
    return (
        <main className="blog-case">
            <h1>
                Кейс: дом из оцилиндрованного бруса
                <br/>
                в Балашихе под ключ
            </h1>
            <p className="blog-case_description">
                Двухэтажный дом, площадью 128 м² в европейском стиле
            </p>
            <form className="blog-case_form">
                <h2>
                    Хотите сотрудничать с профессионалами? 
                </h2>
                <p className="blog-case_form-description">
                    Оставьте заявку и получите бесплатную консультацию
                </p>
                <div className="blog-case_form-fields">
                    <input placeholder="Ваше имя" className="blog-case_form-field"/>
                    <div className="blog-case_form-select">
                        <select className="blog-case_form-field">
                            <option selected disabled hidden>Выберите услугу</option>
                            <option>lorem</option>
                            <option>ipsum</option>
                        </select>
                    </div>
                    <input placeholder="Ваш телефон" className="blog-case_form-field"/>
                    <button className="blog-case_form-field">Отправить</button>
                    <p className="blog-case_form-privacy">
                        <img src={lockIcon} alt="lock"/>
                        Ваши данные не будут переданы третьим лицам
                    </p>
                </div>
                <img className="big-gift" src={gift} alt="gift"/>
                <img className="small-gift" src={gift} alt="gift"/>
            </form>
            <img className="top-right" src={topHouse} alt="house"/>
        </main>
    );
}
 
export default BlogCase;