import React from 'react'

function NaviBar(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="nav justify-content-start">
                        <span className="nav-link">Google Books Search</span>
                        <a className="nav-link" href="/">Search</a>
                        <a className="nav-link" href="/saved">Saved</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NaviBar;