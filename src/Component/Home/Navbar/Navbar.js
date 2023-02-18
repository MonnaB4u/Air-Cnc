import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="Navcontainer">
            <div className="nav-head">
                <ul>
                    <li href="/" style={{"cursor":"pointer"}} onClick={()=>navigate('/')} className="text-color">Aircnc</li>
                </ul>
            </div>



            <div className=""></div>
            <div className="nav-left-ul">
                <ul>
                    <li>Host your home</li>
                    <li>Host your experience</li>
                    <li>Help</li>
                    <li>Sign up</li>
                    <li><button class="login-btn">Log in</button></li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;
