import React from 'react';
import { SS_LOGO } from '../common/assets';
import './SquarespaceLogo.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    color: 'black' | 'white';
    className: string;
}

const SquarespaceLogo: React.FC<Props> = (props) => {
    return (
        <img alt='' className={props.className + ' squarespace-logo'}
             src={props.color === 'black' ? SS_LOGO.black : SS_LOGO.white} />
    );
};

export default SquarespaceLogo;
