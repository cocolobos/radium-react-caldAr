import React from 'react';
import './Header.css'

function Header() {
    return(
        <header className="headerStyle">
            <h1>Technicians</h1>
            <ul className="ulStyle">
                <li className="liStyleHeader">Number</li>
                <li className="liStyleHeader">Full Name</li>
                <li className="liStyleHeader">Email</li>
                <li className="liStyleHeader">Phone</li>
                <li className="liStyleHeader">Status</li>
                <li className="liStyleHeader">Trained In</li>
                <li className="liStyleHeader">Assigned Clients</li>
                <li className="liStyleHeader">Spare Hours Available</li>
                <li className="liStyleHeader">Actions</li>
            </ul>
        </header>
    )
}

export default Header;