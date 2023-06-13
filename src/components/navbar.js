import React from "react";
import ReactDOM from 'react-dom/client';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="navUl">
                    <li className="homeNav">Home</li>
                    <li className="logo"><img></img></li>
                    <li className="profileNav">Nav</li>
                </ul>
            </nav>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<NavBar />)
export default NavBar;
