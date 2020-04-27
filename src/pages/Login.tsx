import React from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonLabel } from '@ionic/react';

import { IG_LOGIN_URL } from '../common/config';
import SquarespaceLogo from '../components/SquarespaceLogo';
import PlatformLoginButton from '../components/PlatformLoginButton';
import BreakerWithText from '../components/BreakerWithText';
import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage id='login-page'>
            <IonHeader>
                <SquarespaceLogo color='black' className='header-icon' />
                <IonLabel id='login-label'>LOG IN</IonLabel>
            </IonHeader>

            <IonContent>
                <h1 id='heading'> Create Your Account </h1>
                <p className='description-font prompt'>
                    Continue with Instagram so we can generate a website with your own images.
                </p>

                <PlatformLoginButton name='Instagram'
                                     logo='https://imgur.com/Yp0zpCZ.png'
                                     link={IG_LOGIN_URL} />
                <BreakerWithText text='OR' />
                <PlatformLoginButton name='Google'
                                     logo='https://imgur.com/zDBl67M.png' />
                <PlatformLoginButton name='Email'
                                     logo='https://imgur.com/tU1GlV1.png' />

                <IonButton expand='full' fill='clear' id='more-option'>
                    MORE OPTIONS
                </IonButton>

                <p className='description-font prompt'>
                    By creating an account, you agree to our{' '}
                    <a href='https://www.squarespace.com/terms-of-service'>Terms of Service</a>
                    {' '}and have read and understood the{' '}
                    <a href='https://www.squarespace.com/privacy'>Privacy Policy</a>
                    .
                </p>
            </IonContent>
        </IonPage>
    );
};

export default Login;
