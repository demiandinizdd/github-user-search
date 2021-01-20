import React from 'react';
import './styles.scss';

type Props = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ButtonApp = ({ text, onClick }: Props) => (
    <button className="button-area" onClick = {onClick}>
        <h4 className="button-text">{text}</h4>
    </button>
);

export default ButtonApp;