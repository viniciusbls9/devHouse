import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import foto from '../../assets/foto.jpg';
import marker from '../../assets/marker.svg';
import calendar from '../../assets/calendar.svg';

import './styles.css';

interface HouseProps {
    id: string;
    thumbnail_url: string;
    description: string;
    price: number;
    location: string;
    status: boolean;
}

const Home: React.FC = () => {

    const history = useHistory();

    const [houses, setHouses] = useState<HouseProps[]>([]);

    useEffect(() => {
        api.get('/houses?status=false').then(response => {
            console.log(response.data);
            setHouses(response.data);
        });
    }, []);

    return (
        <div className="page-home">
            <Header />

            <div className="content-home">
                <h1>Reserve casas, hotéis e muito mais...</h1>

                <div className="houses-content">
                    {houses === [] ?
                        houses.map((house) => (
                            <div className="single-house" key={house.id}>
                                <div className="house-infos">
                                    <img src={house.thumbnail_url} alt="" />
                                    <span>{house.description}</span>
                                    <div className="house-address">
                                        <img src={marker} alt="Marker" />
                                        <span>{house.location}</span>
                                    </div>
                                    <div className="house-value">
                                        <span>R$ {house.price} / Dia</span>
                                        <button>Reservar</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                            <p>sd</p>
                    }
                </div>


                <h2>Minhas Reservas</h2>
                <div className="reserves">
                    <div className="single-reserve">
                        <div className="reserves-infos">
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
                                    <span>20 Fevereiro 2020</span>
                                </div>

                                <button>Cancelar</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Home;