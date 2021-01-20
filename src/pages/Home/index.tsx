import React from 'react';
import ButtonApp from 'core/components/ButtonApp';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="row">
        <div className="col-6 home-container">
            <h2 className="home-title">
                Desafio do Capítulo 3, <br />
                Bootcamp DevSuperior
            </h2>
            <p className="home-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                <br />
                Favor observar as instruções passadas no capítulo sobre a elaboração
                deste projeto. <br />
                <br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: <a href="link">antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
                <ButtonApp text="Começar" />
            </Link>
        </div>
    </div>
);

export default Home;