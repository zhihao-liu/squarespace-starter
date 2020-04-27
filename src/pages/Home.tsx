import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/react';
import { menuSharp } from 'ionicons/icons';

import SquarespaceLogo from '../components/SquarespaceLogo';
import './Home.css'

const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage id='home-page'>
            <IonHeader>
                <SquarespaceLogo color='white' className='header-icon' />
                <IonIcon icon={menuSharp} size='large' id='menu-button' />
            </IonHeader>

            <IonContent>
                <div id='background-image-container'>
                    <img alt='' src='https://i.imgur.com/cMosmP4.jpg' id='background-image' />
                    <img alt='' src='https://imgur.com/vjkYa7c.png'
                         id='start-button' className='button'
                         onClick={() => props.history.push('/login')} />
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Home;