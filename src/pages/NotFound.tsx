import React from 'react';
import { IonPage } from '@ionic/react';
import './NotFound.css';

const NotFound: React.FC = (props) => {
    return (
        <IonPage id='not-found-page'>
            <div>NOT FOUND</div>
        </IonPage>
    );
};

export default NotFound;