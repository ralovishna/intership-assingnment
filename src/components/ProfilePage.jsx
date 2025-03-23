import React from "react";
import "./css/ProfilePage.css";

export default function ProfilePage() {
    return (
        <div className="profile-container">
            <h1 className="profile-title">Account Settings</h1>
            <div className="profile-content">
                <img
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="profile-info">
                    <h2 className="profile-name">John Doe</h2>
                    <p className="profile-email">johndoe@example.com</p>
                </div>
            </div>
            <p className="profile-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
                justo a est tristique, non tincidunt velit tincidunt.
            </p>
        </div>
    );
}
