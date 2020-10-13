import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoo.png';

import './styles.css';

const Header: React.FC = () => {
    return (
        <div className="page-header">
            <div className="container-header">
                <div className="left">
                    <Link to="/home">
                        <img src={logo} alt="" />

                    </Link>
                </div>
                <div className="right-side">
                    <ul>
                        <Link to="/home">
                            <li>Home</li>
                        </Link>

                        <Link to="/reserves">
                            <li>Minhas reservas</li>
                        </Link>

                        <Link to="">
                            <li>Sair</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;