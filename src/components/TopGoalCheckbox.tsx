import React  from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { COLORS } from '../common/constants';
import './TopGoalCheckbox.css';

interface Props {
    text: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
}

const TopGoalCheckbox: React.FC<Props> = (props) => {
    const box = {
        borderColor: props.checked ? COLORS.dark : COLORS.borderGray
    };
    const text = {
        color: props.checked ? COLORS.dark : COLORS.textGray,
        margin: '16px 0 16px'
    };
    const checkbox = {
        backgroundColor: props.checked ? COLORS.dark : 'transparent',
        borderColor: props.checked ? 'transparent' : COLORS.borderGray
    }

    return (
        <IonItem className='top-goal-checkbox button' lines='none' detail={false} style ={box}
                 onClick={() => {
                     if (props.onChange) props.onChange(!props.checked);
                 }} >
            <div className='checkbox' style={checkbox} />
            <IonLabel><span className='top-goal-text' style={text}>{props.text}</span></IonLabel>
        </IonItem>
    );
};

export default TopGoalCheckbox;
