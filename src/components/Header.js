import React from 'react';
import Link from './Link.js'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href='/' className="item">Language Translator</Link>
            <Link href='/searchwiki' className="item">Search Wikipedia</Link>
            <Link href='/accordion' className="item">Accordion Notes</Link>
            <Link href='/color' className="item">Color Picker</Link>
        </div>
    )
}


export default Header;