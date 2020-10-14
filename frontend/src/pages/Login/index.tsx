import React from 'react';
import logo from '../../assets/logoo.png';
import './styles.css';

const Login: React.FC = () => {
    return (
        <div className="container-login">
            <img src={logo} alt="" />

            <form>
                <div className="input-block">
                    <input type="text" placeholder="Digite seu e-mail" />
                    <button type="submit">Acessar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;