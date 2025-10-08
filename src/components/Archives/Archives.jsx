import React from 'react';
import { Link } from 'react-router-dom';

const archives = [
    {title: '1 Conference', href: 'https://www.google.com'},
    {title: '2 Conference', href: 'https://www.google.com'},
    {title: '3 Conference', href: 'https://www.google.com'},
];

function Archives() {
    return (
        <div>
            <ul>
                {
                 archives.map((item, index) => <li key={index}><Link to={item.href}>{item.title}</Link></li>)   
                }
            </ul>
        </div>
    )
}

export default Archives;