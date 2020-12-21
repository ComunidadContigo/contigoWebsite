import React from 'react';
import '../Nav/Nav.scss';

const Nav = () => {
    return ( 
    <div className="navWrapper">
        <div className="navLogo">
            <h1>contigo</h1>
        </div>
        <div className="navLinks">
            <ul>
                <li>
                    Comunidad
                </li>
                <li>
                    Negocios
                </li>
            </ul>
        </div>
    </div> 
    );
}
 
export default Nav;