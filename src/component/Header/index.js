import React from "react";
import images from "../../images";
import Menu from "../Menu";
import "./header.css";
import phone from "./images/phone.png"
import _3d from "./images/3d.svg"

export const Header = () => {
    return (
    <header className="header">
        <div className="header_top">
            <img src={images.logo} alt="logo"/>
            <div className="header_working-hours">
                <p>Пн-Сб: c 10:00 до 20:00</p>
                <p>Выходной: воскресенье</p>
            </div>
            <div className="header_order-3d-design">
                <div className="header_order-3d-design_image">
                    <img height={50} width={50} src={_3d} alt="3d"/>
                </div>
                <p>Заказать 3D-макет дома</p>
            </div>
            <div className="header_contacts">
                <img width={64} height={64} src={phone} alt="phone"></img>
                <div className="header_contacts_content">
                    <p>+7 (915) 168-55-50</p>
                    <div className="header_contacts_icons">
                        <img width={25} height={25} src={images.phone} alt="phone"></img>
                        <img width={25} height={25} src={images.telegram} alt="telegram"></img>
                        <img width={25} height={25} src={images.viber} alt="viber"></img>
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