import React from 'react';


const Link = (props) => {

    const { href, className, children } = props;

    // const onClick = (e) => {
    //     e.preventDefault();
    //     window.history.pushState({}, '', href)

    //     const navEvent = new PopStateEvent('popstate')
    //     window.dispatchEvent(navEvent)
    // }

    return (
        <a  href={href} className={className}>
            {children}
        </a>
    )
}


export default Link;