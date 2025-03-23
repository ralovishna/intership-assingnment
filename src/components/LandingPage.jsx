import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LandingPage.css';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to Our App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="button-container">
                <button className="button" onClick={() => navigate('/create-account')}>
                    Create Account
                </button>
                <button className="button" onClick={() => navigate('/login')}>
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
}
