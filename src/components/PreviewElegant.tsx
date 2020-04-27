import React from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

import { SS_LOGO } from '../common/assets';
import './PreviewElegant.css';

interface Props {
    name: string;
    size: 'small' | 'large';
}

const PreviewElegant: React.FC<Props> = (props) => {
    const menuIcon = {
        fontSize: props.size === 'small' ? '20px' : '32px'
    };

    const nameText = {
        fontSize: props.size === 'small' ? '36px' : '60px'
    }

    return (
        <div className='preview-elegant'>
            <div className='preview-header'>
                <IonIcon className='preview-menu-icon' icon={menuOutline} style={menuIcon} />
            </div>

            <div className='cover-picture'>
                <img alt='' src='https://i.imgur.com/lrNoaDj.png' />
                <div style={nameText}>{props.name}</div>
            </div>

            <div className='gallery-section'>
                <img className='section-title' alt='' src='https://i.imgur.com/WRjnsL6.png' />

                <div className='gallery'>
                    <div>
                        <img alt='' src='https://i.imgur.com/OSCQyiIb.png' />
                        <img alt='' src='https://i.imgur.com/zn3a5XUb.png' />
                        <img alt='' src='https://i.imgur.com/iaBKDD5b.png' />
                    </div>
                    <div>
                        <img alt='' src='https://i.imgur.com/TyJEmiBb.png' />
                        <img alt='' src='https://i.imgur.com/PQeALrRb.png' />
                        <img alt='' src='https://i.imgur.com/dx3cbfkb.png' />
                    </div>
                </div>
            </div>

            <div className='blog-section'>
                <div className='picture'>
                    <img alt='' src='https://i.imgur.com/iKzZeG9.png' />
                </div>
                <div className='text'>
                    <div className='blog-title'>My First Travel Blog</div>
                    <div className='blog-date'>Mar 21, 2020</div>
                </div>
            </div>

            <div className='gallery-section'>
                <img className='section-title' alt='' src='https://i.imgur.com/Rhtzi0h.png' />
                <div className='gallery'>
                    <div>
                        <img alt='' src='https://i.imgur.com/mnxrtd9.png' />
                        <img alt='' src='https://i.imgur.com/n3oiOp7.png' />
                        <img alt='' src='https://i.imgur.com/jOIQ2uR.png' />
                    </div>
                    <div>
                        <img alt='' src='https://i.imgur.com/DhbZdLa.png' />
                        <img alt='' src='https://i.imgur.com/3m5j99k.png' />
                        <img alt='' src='https://i.imgur.com/tWDw4IZ.png' />
                    </div>
                </div>
            </div>

            <div className='preview-footer'>
                <img className='footer-logo' alt='' src={SS_LOGO.blackLong} />
                <div className='copyright-text'>2020 Sherry all rights reserved.</div>
            </div>
        </div>
    );
};

export default PreviewElegant;