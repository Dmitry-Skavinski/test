import React from "react";
import images from '../../images'
import "./footer.css";
import alfadigital from "./images/alfadigital.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_column footer_column__special">
                <img src={images.logo} alt="logo"/>
                <button>
                    Заказать звонок
                </button>
            </div>
            <div className="footer_column">
                <p>
                    Главная
                </p>
                <p>
                    Каталог
                </p>
                <p>
                    Услуги
                </p>
                <p>
                    Рассчёт стоимости
                </p>
                <p>
                    Консультация архитектора
                </p>
            </div>
            <div className="footer_column">
                <p>
                    Экскурсия на объект
                </p>
                <p>
                    3D-макет дома
                </p>
                <p>
                    О нас
                </p>
                <p>
                    Блок
                </p>
                <p>
                    Контакты
                </p>
            </div>
            <div className="footer_column footer_column__special-gap">
                <p className="footer_paragraph__small">
                    Делимся крутыми проектами в <br/> соц.сетях.Подписывайтесь!
                </p>
                <div className="footer_logos">
                    <img src={images.vk} alt="vk"/>
                    <img src={images.instagram} alt="instagram"/>
                    <img src={images.fb} alt="facebook"/>
                    <img src={images.youtube} alt="youtube"/>
                </div>
                <p className="footer_paragraph__small">
                    Разработка и продвижение сайта:
                </p>
                <img src={alfadigital} alt="alfa digital"/>
            </div>
        </footer>
    );
}
 
export default Footer;