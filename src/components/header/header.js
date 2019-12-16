import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import './header.sass'; 


export default class Header extends Component {

    render() {
        return ( 
            <>
                    <header>
                        <ul className="header">
                            <li className="header__item">
                            <Link to="/">Coffee house</Link>
                            </li>
                            <li className="header__item">
                            <Link to="/our-coffee/">Our coffee</Link>
                            </li>
                            <li className="header__item">
                            <Link to="/pleasure/">For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
    </>
        );
    }
}; 