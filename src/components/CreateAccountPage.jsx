import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CreateAccountPage.css';

const CreateAccountPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required.";
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

        console.log("Account Creation Data:", formData);

        // Simulate success and redirect
        alert('Account created successfully!');
        navigate('/profile');  // Redirect to profile page
    };

    return (
        <div className="create-account-container">
            <h2>Create PopX Account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Full Name<span className="error">*</span></legend>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <p className="error">{errors.fullName}</p>}
                </fieldset>

                <fieldset>
                    <legend>Email<span className="error">*</span></legend>
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
                    <legend>Phone Number<span className="error">*</span></legend>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number *"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </fieldset>

                <fieldset>
                    <legend>Password<span className="error">*</span></legend>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </fieldset>

                <fieldset>
                    <legend>Are you an Agency?</legend>
                    <div className="radio-group">
                        {['yes', 'no'].map((option) => (
                            <label key={option}>
                                <input
                                    type="radio"
                                    name="isAgency"
                                    value={option}
                                    checked={formData.isAgency === option}
                                    onChange={handleChange}
                                />
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </label>
                        ))}
                    </div>
                </fieldset>


                <div className="button-container">
                    <button className="button" type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAccountPage;