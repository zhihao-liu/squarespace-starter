import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/react';

import { DEFAULT_WEBSITE_NAME } from '../common/constants';
import { STYLE_CARDS, PHONE_MOCK } from '../common/assets';
import { renderPreview } from '../common/util';
import SquarespaceLogo from '../components/SquarespaceLogo';
import NavigationButton from '../components/NavigationButton';
import StyleCardsScroll from '../components/StyleCardsScroll';
import './Styles.css';

interface Params {
    name: string;
}

const Styles: React.FC<RouteComponentProps<Params>> = (props) => {
    const [ style, setStyle ] = useState(STYLE_CARDS[0][0]);

    const name = props.match.params.name ?? DEFAULT_WEBSITE_NAME;

    return (
        <IonPage id='styles-page'>
            <IonHeader>
                <SquarespaceLogo color='black' className='header-icon' />
                <NavigationButton id='preview-button'
                                  onClick={() => props.history.push(`/preview/${style}/${name}`)}>
                    PREVIEW
                </NavigationButton>
            </IonHeader>

            <IonContent>
                <img id='phone-mock' alt='' src={PHONE_MOCK} />
                <div id='preview-section'>
                    {renderPreview(style, name, 'small')}
                </div>
            </IonContent>

            <IonFooter>
                <div id='footer'>
                <div id='choose-style-title'>Choose Style</div>
                <StyleCardsScroll selected={style} onSelectChange={setStyle} />
                </div>
            </IonFooter>
        </IonPage>
    );
};

export default Styles;
