import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';

import { DEFAULT_WEBSITE_NAME } from '../common/constants';
import { renderPreview } from '../common/util';
import NavigationButton from '../components/NavigationButton';
import './Preview.css';

interface Params {
    style: string;
    name: string;
}

const Preview: React.FC<RouteComponentProps<Params>> = (props) => {
    const { style } = props.match.params;
    const name = props.match.params.name ?? DEFAULT_WEBSITE_NAME;

    return (
        <IonPage id='preview-page'>
            <IonHeader>
                <IonIcon id='back-symbol' icon={chevronBackSharp} />
                <NavigationButton color='black' background='transparent'
                                  onClick={() => props.history.goBack()}>
                    BACK
                </NavigationButton>
                <NavigationButton className='ion-float-right'
                                  onClick={() => props.history.push(`/publish/${style}/${name}`)}>
                    PUBLISH
                </NavigationButton>
            </IonHeader>
            <IonContent>
                <div id='preview-section'>
                    {renderPreview(style, name, 'large')}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Preview;
