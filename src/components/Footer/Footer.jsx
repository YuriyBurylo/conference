import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="socials">
                <Link>Facebook</Link>
                <Link>X</Link>
                <Link>Telegram</Link>
                <Link>Viber</Link>
            </div>
        </footer>
    )
}

export default Footer;