import React from 'react';
import './FutureStylePlaceholder.css';

interface Props {
    size: 'small' | 'large';
}

const FutureStylePlaceholder: React.FC<Props> = (props) => {
    const text = {
        fontSize: props.size === 'small' ? '16px' : '24px'
    };

    return (
        <div className='future-style-placeholder'>
            <div style={text}>COMING SOON...</div>
        </div>
    );
};

export default FutureStylePlaceholder;