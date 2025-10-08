import React from 'react';
import { Link } from 'react-router-dom';

const socials = [
    {name: 'Facebook', href: 'https://www.facebook.com'},
    {name: 'X', href: 'https://x.com/'},
    {name: 'Telegram', href: 'https://web.telegram.org/'},
    {name: 'Viber', href: 'https://www.viber.com/'}
];

function Footer() {
    return (
        <footer>
            <div className="socials">
                <ul>
                    {
                        socials.map((item, index) => <li key={index}><Link to={item.href}>{item.name}</Link></li>)
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer;