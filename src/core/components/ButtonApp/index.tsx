import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonApp = ({ text }: Props) => (
    <button className="btn-area">
        <h4 className="btn-text">{text}</h4>
    </button>
);

export default ButtonApp;