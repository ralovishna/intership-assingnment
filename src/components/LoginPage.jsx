import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
            tempErrors.email = "Invalid email format.";
        if (formData.password.trim().length < 6)
            tempErrors.password = "Password must be at least 6 characters.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log("Login Data:", formData);
        alert('Login successful!');
        setFormData({ email: '', password: '' });
        setErrors({});
        navigate('/profile');  // Redirect to profile
    };

    return (
        <div className="container">
            <h2>Login to PopX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Email<span className="red">*</span></legend>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </fieldset>

                <fieldset>
                    <legend>Password<span className="red">*</span></legend>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </fieldset>

                <div className="button-container">
                    <button className="button" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
