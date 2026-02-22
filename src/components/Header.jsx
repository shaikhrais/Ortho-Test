const Header = ({ searchQuery, setSearchQuery, user }) => {
    return (
        <header className="global-header">
            <div className="header-logo-section">
                <div className="header-app-logo">
                    <div className="logo-icon-container">
                        <span className="material-symbols-outlined">orthopedics</span>
                    </div>
                    <h1 className="logo-text">OrthoTests</h1>
                </div>
                <nav className="header-nav">
                    <a className="nav-link nav-link-active" href="#">Tests</a>
                    <a className="nav-link" href="#">Categories</a>
                    <a className="nav-link" href="#">Library</a>
                    <a className="nav-link" href="#">About</a>
                </nav>
            </div>

            <div className="header-search-container">
                <div className="search-box">
                    <span className="material-symbols-outlined search-icon">search</span>
                    <input
                        className="search-input"
                        placeholder="Search tests, symptoms, or regions (Cmd + K)"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="header-actions">
                <button className="notification-btn">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="notification-badge"></span>
                </button>
                <div className="header-divider"></div>
                <div className="user-profile-section">
                    <div className="user-info">
                        <p className="user-name">{user?.name || 'Dr. Smith'}</p>
                        <p className="user-role">{user?.role || 'Senior Resident'}</p>
                    </div>
                    <div className="user-avatar">
                        <img
                            className="avatar-img"
                            alt="Professional profile"
                            src={user?.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuASALPAElCptB9b0yh0VZSqPS4q9y-F_jiab-r32q3ClvVfw9_HqSKd6gZ153nAMzUxdSswg4MtjCozqdeOjOICMikv9AX5lScOP2SXn_HNw6wLGj9M2HJDbet_N5DvO0HM0xAmmjkoGF5CanIubsVumpElgvG3LlhiSZO1RUats41KQ-7Wu0Px-CuLNv6NnWKp3sPvfeJERiFwTotsOjFLHNbeORn7auGQ42kmM7juHzs6UjbrwDzxrwFAOykQNMkI0dRthP9g-g"}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
