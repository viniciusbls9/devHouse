import React from 'react';
import Header from '../../components/Header';

import foto from '../../assets/foto.jpg';
import marker from '../../assets/marker.svg';
import calendar from '../../assets/calendar.svg';

import './styles.css';
import HousesContent from '../../components/HousesContent';

const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Header />

            <div className="content-home">
                <h1>Reserve casas, hotéis e muito mais...</h1>

                <HousesContent>
                    <div className="house-infos">
                        <img src={foto} alt="" />
                        <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                        <div className="house-address">
                            <img src={marker} alt="Marker" />
                            <span>Avenida 19, São Paulo</span>
                        </div>
                        <div className="house-value">
                            <span>R$ 1000,00 / Dia</span>
                            <button>Reservar</button>
                        </div>
                    </div>

                    <div className="house-infos">
                        <img src={foto} alt="" />
                        <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                        <div className="house-address">
                            <img src={marker} alt="Marker" />
                            <span>Avenida 19, São Paulo</span>
                        </div>
                        <div className="house-value">
                            <span>R$ 1000,00 / Dia</span>
                            <button>Reservar</button>
                        </div>
                    </div>
                </HousesContent>

                <h2>Minhas Reservas</h2>
                <HousesContent>
                    <div className="left-side">
                        <img src={foto} alt="" />
                    </div>

                    <div className="right-side">
                        <div className="reserve-infos">
                            <img src={calendar} alt="Marker" />
                            <span>20 Fevereiro 2020</span>
                        </div>

                        <div className="reserve-infos">
                            <img src={marker} alt="Marker" />
                            <span>Rua 50, Meia praia SC</span>
                        </div>

                        <button>Cancelar</button>
                    </div>
                </HousesContent>
            </div>
        </div>
    );
}

export default Home;