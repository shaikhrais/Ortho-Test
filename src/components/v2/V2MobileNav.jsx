import React from 'react';

const V2MobileNav = () => {
    return (
        <nav className="v2-mobile-nav">
            <button className="v2-m-nav-item active">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="v2-m-nav-label">Dash</span>
            </button>
            <button className="v2-m-nav-item">
                <span className="material-symbols-outlined">search</span>
                <span className="v2-m-nav-label">Explore</span>
            </button>
            <button className="v2-m-nav-item">
                <span className="material-symbols-outlined">bookmark</span>
                <span className="v2-m-nav-label">Library</span>
            </button>
            <button className="v2-m-nav-item">
                <span className="material-symbols-outlined">person</span>
                <span className="v2-m-nav-label">Profile</span>
            </button>
        </nav>
    );
};

export default V2MobileNav;
