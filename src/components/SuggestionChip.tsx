import React  from 'react';
import { COLORS } from '../common/constants';
import './SuggestionChip.css';

interface Props {
    text: string;
    checked: boolean;
    onClick?: () => void;
}


const SuggestionChip: React.FC<Props> = (props) => {
    const box = {
        borderColor: props.checked ? COLORS.dark : COLORS.borderGray
    };
    const text = {
        color: props.checked ? COLORS.dark : COLORS.textGray
    };

    return (
        <div className='suggestion-chip button' style={box} onClick={props.onClick}>
            <span style={text}>{props.text}</span>
        </div>
    );
};

export default SuggestionChip;
