import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import logo from '../../assets/logoo.png';
import './styles.css';

const Login: React.FC = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await api.post('session', { name, email });

            localStorage.setItem('username', name);

            history.push('/home');
        } catch (err) {
            alert('Falha no login. Tente novamente');
        }
    }

    return (
        <div className="container-login">
            <img src={logo} alt="" />

            <form>
                <div className="input-block">
                    <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value) } />
                    <input type="text" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value) } />
                    <button type="submit" onClick={handleLogin}>Acessar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;