import React from "react";
import "./menu.css";

export const Menu = () => {
    return (
    <menu className="menu">
        <li>Каталог домов ▼</li>
        <li>Услуги ▼</li>
        <li>О нас ▼</li>
        <li>Контакты</li>
        <li>Блог ▼</li>
    </menu>
    );
}
 
export default Menu;