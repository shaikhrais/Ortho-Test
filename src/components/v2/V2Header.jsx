import React from 'react';

const V2Header = ({ user }) => {
    return (
        <header className="v2-header">
            <div className="v2-logo-group">
                <div className="v2-brand flex items-center gap-3">
                    <div className="v2-logo-box">
                        <span className="material-symbols-outlined text-2xl">orthopedics</span>
                    </div>
                    <h1 className="v2-logo-text">OrthoTests</h1>
                </div>
                <nav className="v2-nav-links">
                    <a href="#" className="v2-nav-link active">Tests</a>
                    <a href="#" className="v2-nav-link">Categories</a>
                    <a href="#" className="v2-nav-link">Library</a>
                    <a href="#" className="v2-nav-link">About</a>
                </nav>
            </div>

            <div className="v2-search-container">
                <div className="v2-search-box">
                    <span className="material-symbols-outlined v2-search-icon">search</span>
                    <input
                        type="text"
                        className="v2-search-input"
                        placeholder="Search tests, symptoms, or regions (Cmd + K)"
                    />
                </div>
            </div>

            <div className="v2-header-actions">
                <button className="v2-notif-btn">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="v2-notif-dot"></span>
                </button>
                <div className="v2-profile-group">
                    <div className="v2-profile-text">
                        <p className="v2-profile-name">{user.name}</p>
                        <p className="v2-profile-role">{user.role}</p>
                    </div>
                    <div className="v2-avatar">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASALPAElCptB9b0yh0VZSqPS4q9y-F_jiab-r32q3ClvVfw9_HqSKd6gZ153nAMzUxdSswg4MtjCozqdeOjOICMikv9AX5lScOP2SXn_HNw6wLGj9M2HJDbet_N5DvO0HM0xAmmjkoGF5CanIubsVumpElgvG3LlhiSZO1RUats41KQ-7Wu0Px-CuLNv6NnWKp3sPvfeJERiFwTotsOjFLHNbeORn7auGQ42kmM7juHzs6UjbrwDzxrwFAOykQNMkI0dRthP9g-g" alt="Doctor profile" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default V2Header;
