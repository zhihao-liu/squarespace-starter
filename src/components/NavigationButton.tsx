import React from 'react';
import { COLORS } from '../common/constants';
import './NavigationButton.css';

interface Props extends React.HTMLAttributes<HTMLElement> {
    hidden?: boolean;
    disabled?: boolean;
    color?: string;
    background?: string;
    border?: string;
    onClick?: () => void;
}

const NavigationButton: React.FC<Props> = (props) => {
    const box = {
        backgroundColor: props.background ?? COLORS.dark,
        borderColor: props.border ?? 'transparent'
    };
    const label = {
        color: props.color ?? 'white'
    };

    return (
        <div id={props.id} className={props.className + ' navigation-button button'}
             hidden={props.hidden} style={box}
             onClick={props.disabled ? undefined : props.onClick}>
            <span style={label}>{props.children}</span>
        </div>
    );
};

export default NavigationButton;
