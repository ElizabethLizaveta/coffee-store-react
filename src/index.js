import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import App from './components/app';


ReactDOM.render(
    <ErrorBoundry>
        <Router>
            <App />
        </Router>
    </ErrorBoundry>,
    document.getElementById('root'));

