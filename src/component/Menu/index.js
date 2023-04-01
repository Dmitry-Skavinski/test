import React from "react";
import "./menu.css";

export const Menu = () => {

    return (
    <menu className="menu">
        <li>Каталог домов ▼
            <ul>
                <li>lorem</li>
                <li>ipsum</li>
            </ul>
        </li>
        <li>Услуги ▼
            <ul>
                <li>lorem</li>
                <li>ipsum</li>
            </ul>
        </li>

        <li>О нас ▼
            <ul>
                <li>lorem</li>
                <li>ipsum</li>
            </ul>
        </li>
        <li>Контакты</li>
        <li>Блог ▼
            <ul>
                <li>lorem</li>
                <li>ipsum</li>
            </ul>
        </li>
    </menu>
    );
}
 
export default Menu;