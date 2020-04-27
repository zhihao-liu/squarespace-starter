import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import './PlatformLoginButton.css';

interface Props {
    name: string;
    logo: string;
    link?: string
}

const PlatformLoginButton: React.FC<Props> = (props) => {
    return (
        <IonItem className='platform-login-button button' button lines='none' detail={false}
                 onClick={() => window.open(props.link, '_self')} >
            <IonLabel><span>Continue with {props.name}</span></IonLabel>
            <img alt='' src={props.logo} />
        </IonItem>
    );
};

export default PlatformLoginButton;
