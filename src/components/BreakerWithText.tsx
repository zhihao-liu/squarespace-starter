import React from 'react';
import './BreakerWithText.css';

interface IProp {
    text: string;
}


const BreakerWithText: React.FC<IProp> = (props) => {
    return (
        <div className='breaker-with-text'>
            <span className='inner-text'>{props.text}</span>
        </div>
    );
};

export default BreakerWithText;
