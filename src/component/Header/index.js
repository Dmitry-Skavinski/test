import React from "react";
import Menu from "../Menu";
import "./header.css";

export const Header = () => {
    return (
    <header className="header">
        <div className="header_top">
            <img src="/images/logo.png" alt="logo"/>
            <div className="header_working-hours">
                <p>Пн-Сб: c 10:00 до 20:00</p>
                <p>Выходной: воскресенье</p>
            </div>
            <div className="header_order-3d-design">
                <div className="header_order-3d-design_image">
                </div>
                <p>Заказать 3D-макет дома</p>
            </div>
            <div className="header_contacts">
                <img width={64} height={64} src="/images/phone.png" alt="phone"></img>
                <div className="header_contacts_content">
                    <p>+7 (915) 168-55-50</p>
                    <div className="header_contacts_icons">
                        <img width={25} height={25} src="/images/phone.svg" alt="phone"></img>
                        <img width={25} height={25} src="/images/telegram.svg" alt="telegram"></img>
                        <img width={25} height={25} src="/images/viber.svg" alt="viber"></img>
                    </div>
                </div>
                <button className="header_contacts_order-call">Заказать звонок</button>
            </div>
        </div>
        <Menu/>
    </header>
    );
}
 
export default Header;