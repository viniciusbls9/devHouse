import React from 'react';

import logo from '../../assets/logoo.png';

import './styles.css';

const Header: React.FC = () => {
  return (
      <div className="page-header">
        <div className="container-header">
          <div className="left-side">
            <img src={logo} alt=""/>
          </div>

          <div className="right-side">
            <ul>
              <li>Home</li>
              <li>Minhas reservas</li>
            </ul>
          </div>
          
        </div>
      </div>
  );
}

export default Header;