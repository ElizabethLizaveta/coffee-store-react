import React from 'react';
import './errorMessage.css';

const ErrorMessage = () => {
return (
    <>
    <div className="error-wrap">
    <img className="error-img" src="../../img/error-img.jpg" alt='error'></img>
    <div className="error-text">Something went wrong...</div>
    </div>
    </>
)
}

export default ErrorMessage;