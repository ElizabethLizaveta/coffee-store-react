import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import './footer.sass'; 


export default class Footer extends Component {
    render() {
        return ( 
            <>
                   <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-lg-4">
                    <ul className="footer">
                    <li className="footer__item">
                            <Link to="/">Coffee house</Link>
                            </li>
                            <li className="footer__item">
                            <Link to="/our-coffee/">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                            <Link to="/pleasure/">For your pleasure</Link>
                            </li>
                    </ul>
                </div>
            </div>
            <img className="beanslogo" src="../../logo/Beans_logo_dark.svg" alt="Beans logo"/>
        </div>
    </footer>
    </>
        );
    }
}; 