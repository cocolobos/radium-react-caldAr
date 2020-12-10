import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Technicians</h1>
        </header>
    )
}

const headerStyle = {
    background: 'rgb(239,232,216)',
    color: 'rgb(19,84,76)',
    textAlign: 'center',
    padding: '10px',
}

export default Header;