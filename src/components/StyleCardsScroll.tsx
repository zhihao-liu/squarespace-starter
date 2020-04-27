import React from 'react';
import { STYLE_CARDS } from '../common/assets';
import './StyleCardsScroll.css';

interface Props {
    selected?: string;
    onSelectChange?: (selected: string) => void;
}

const StyleCardsScroll: React.FC<Props> = (props) => {
    return (
        <div className='choose-style-segment'>
            {STYLE_CARDS.map(([ style, card ]) => (
                <img key={style} alt='' src={card} className='button'
                     style={{ outlineStyle: style === props.selected ? 'solid' : 'none' }}
                     onClick={() => {
                         if (props.onSelectChange) props.onSelectChange(style);
                     }}
                />
            ))}
        </div>
    );
};

export default StyleCardsScroll;