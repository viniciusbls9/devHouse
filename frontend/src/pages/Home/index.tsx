import React from 'react';
import Header from '../../components/Header';

import './styles.css';

const Home: React.FC = () => {
    return (
        <div className="page-home">
            <Header />

            <div className="content-home">
                <h1>Reserve casas, hotéis e muito mais...</h1>
            </div>
        </div>
    );
}

export default Home;