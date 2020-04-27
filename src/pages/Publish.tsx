import React  from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonPage, IonFooter, IonIcon } from '@ionic/react';

import { DEFAULT_WEBSITE_NAME } from '../common/constants';
import { PHONE_MOCK } from '../common/assets';
import SquarespaceLogo from '../components/SquarespaceLogo';
import NavigationButton from '../components/NavigationButton';
import { renderPreview } from '../common/util';
import './Publish.css';
import { arrowForwardSharp } from 'ionicons/icons';

interface Params {
    style: string;
    name: string;
}

const Publish: React.FC<RouteComponentProps<Params>> = (props) => {
    const { style } = props.match.params;
    const name = props.match.params.name ?? DEFAULT_WEBSITE_NAME;

    return (
        <IonPage id='publish-page'>
            <IonHeader>
                <SquarespaceLogo color='black' className='header-icon' />
            </IonHeader>

            <IonContent>
                <div id='prompt'>
                    <h1>Congratulations.<br />Your website is published.</h1>
                    <div>
                        <span>https://awesome.squarespace.com</span>
                        <IonIcon icon={arrowForwardSharp} />
                    </div>
                </div>

                <div>
                    <img id='phone-mock' alt='' src={PHONE_MOCK} />
                    <div id='preview-section'>
                        {renderPreview(style, name, 'small')}
                    </div>
                </div>
            </IonContent>

            <div id='footer-gradient' />
            <IonFooter>
                <NavigationButton id='get-domain-button'>GET A DOMAIN</NavigationButton>
            </IonFooter>
        </IonPage>
    );
};

export default Publish;
