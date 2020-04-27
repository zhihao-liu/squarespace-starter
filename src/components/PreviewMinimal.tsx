import React from 'react';
import { IonGrid, IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

import { SS_LOGO } from '../common/assets';
import './PreviewMinimal.css';

interface Props {
    name: string;
    size: 'small' | 'large';
}

const PreviewMinimal: React.FC<Props> = (props) => {
    const nameText = {
        fontSize: props.size === 'small' ? '20px' : '32px'
    };

    return (
        <div className='preview-minimal'>
            <div className='preview-header' color='white'>
                <IonIcon className='preview-menu-icon' icon={menuOutline} style={nameText} />
            </div>

            <div className='content'>
                <h1 className='website-name' style={nameText}>{props.name.toUpperCase()}</h1>

                <IonGrid className='gallery ion-no-padding'>
                    <div>
                        <img alt='' src="https://i.imgur.com/OSCQyiIb.png" />
                        <img alt='' src="https://i.imgur.com/zn3a5XUb.png" />
                    </div>
                    <div>
                        <img alt='' src="https://i.imgur.com/iaBKDD5b.png" />
                        <img alt='' src="https://i.imgur.com/TyJEmiBb.png" />
                    </div>
                    <div>
                        <img alt='' src="https://i.imgur.com/PQeALrRb.png" />
                        <img alt='' src="https://i.imgur.com/dx3cbfkb.png" />
                    </div>
                </IonGrid>
            </div>

            <div className='preview-footer'>
                <img className='footer-logo' alt='' src={SS_LOGO.whiteLong} />
                <div className='copyright-text'>2020 Sherry all rights reserved.</div>
            </div>
        </div>
    );
}

export default PreviewMinimal;