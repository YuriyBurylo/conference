import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>НАУКОВІ КОНФЕРЕНЦІЇ</h1>
            <nav>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/conferences">Конференції</NavLink>
                <NavLink to="/archives">Архив</NavLink>
                <NavLink to="/requirements">Вимоги</NavLink>
                <NavLink to="/payment">Оплата</NavLink>
            </nav>
        </header>
    )
}

export default Header;