import React from 'react';
import Header from '../../components/Header';

import foto from '../../assets/foto.jpg';

import './styles.css';

const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Header />

            <div className="content-home">
                <h1>Reserve casas, hotéis e muito mais...</h1>

                <div className="houses-content">
                    <div className="house-infos">
                        <img src={foto} alt=""/>
                        <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;