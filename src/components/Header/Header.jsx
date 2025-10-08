import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
    {section: 'Головна', href: '/'},
    {section: 'Актуальні конференції', href:'/conferences'},
    {section: 'Архів', href: '/archives'},
    {section: 'Вимоги', href: '/requirements'},
    {section: 'Оплата', href: '/payment'}
];

function Header() {
    return (
        <header>
            <h1>НАУКОВІ КОНФЕРЕНЦІЇ</h1>
            <nav>
                <ul>
                    {
                        menu.map((item, index) => <li key={index}><NavLink to={item.href}>{item.section}</NavLink></li>) 
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;