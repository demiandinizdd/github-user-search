import React from 'react';
import ButtonApp from 'core/components/ButtonApp';
import './styles.scss';

const Home = () => {
    const email = <p className="email-text">antforfigma@gmail.com</p>;

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
            <div className="button-alignment">
                <ButtonApp text = "Começar"/>
            </div>
        </div>
    );
};

export default Home;