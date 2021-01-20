import React from 'react';
import ButtonApp from 'core/components/ButtonApp';
import './styles.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    //Also can use tag <a href> and inplement mailto, if desired
    //const email = <a className="email-text" href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>;
    const email = <span className="email-text">antforfigma@gmail.com</span>;

    return (
        <div>
            <h1 className="text-title">
                Desafio do Capítulo 3, <br />
                Bootcamp DevSuperior
            </h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                Favor observar as instruções passadas no capítulo sobre a elaboração <br />
                deste projeto. <br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: {email}
            </p>
            <Link to="/search" className="button-alignment">
                <ButtonApp text = "Começar"/>
            </Link>
        </div>
    );
};

export default Home;