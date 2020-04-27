import React, { useEffect, useState } from 'react';
import { IonSearchbar } from '@ionic/react';
import SuggestionChip from './SuggestionChip';
import './SearchWithSuggestions.css';

interface Props {
    maxSuggestions: number;
    possibleValues: string[];
    selected: string | null;
    onSelectChange: (selected: string | null) => void;
}

const SearchWithSuggestions: React.FC<Props> = (props) => {
    const [ input, setInput ] = useState('');

    const { selected, onSelectChange } = props;
    const suggestedValues = props.possibleValues
        .filter(v => v.toLowerCase().startsWith(input))
        .slice(0, props.maxSuggestions);

    useEffect(() => {
        if (selected !== null && !suggestedValues.includes(selected)) {
            onSelectChange(null);
        }
    }, [ suggestedValues, selected, onSelectChange ]);

    return (
        <div className='search-with-suggestions'>
            <IonSearchbar className='ion-no-padding' color='light' debounce={100}
                          onIonChange={e => setInput((e.detail.value || '').toLowerCase())}/>

            <div className='chips-container'>{suggestedValues.map(value =>
                <SuggestionChip key={value} text={value} checked={value === selected}
                                onClick={() => onSelectChange(value === props.selected ? null : value)} />
            )}</div>
        </div>
    );
}

export default SearchWithSuggestions;
