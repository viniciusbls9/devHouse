import React from 'react';
import Header from '../../components/Header';

import foto from '../../assets/foto.jpg';
import trash from '../../assets/trash.svg';
import marker from '../../assets/marker.svg';

import './styles.css';

const MyHouses: React.FC = () => {
    return (
        <div className="page-content">
            <Header />

            <div className="content-reserves">
                <h1>Reserve casas, hotéis e muito mais...</h1>
                <div className="houses-content">
                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>

                    <div className="single-reserve">
                        <div className="house-infos-reserves">
                            <img src={foto} alt="" />
                            <span>Casa bem grande com piscina aquecida, com 3 quartos e 1 suite</span>
                            <div className="house-address">
                                <img src={marker} alt="Lixeira" />
                                <span>Avenida 19, São Paulo</span>
                            </div>
                            <div className="house-value-reserves">
                                <span>R$ 1000,00 / Dia</span>
                                <button>
                                    <img src={trash} alt="" />
                                </button>
                                <button>Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHouses;