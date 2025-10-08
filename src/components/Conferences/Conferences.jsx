import React from 'react';
import { Link } from 'react-router-dom';


const conferences = [
    {name: 'Київська конференція з права', href: 'https://www.google.com'},
    {name: 'Одеська конференція з економіки', href: 'https://www.google.com'},
    {name: 'Вінницька конференція з медицини', href: 'https://www.google.com'},
    {name: 'Хмельницька конференція з державного управління', href: 'https://www.codecademy.com/'}
];

function Conferences() {
    return (
        <div>
            <ul>
                {
                    conferences.map((item, index) => <li key={index}><Link to={item.href}>{item.name}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Conferences;