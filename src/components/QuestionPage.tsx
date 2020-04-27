import React, { HTMLAttributes } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonFooter, IonPage } from '@ionic/react';

import { COLORS } from '../common/constants';
import NavigationButton from '../components/NavigationButton';
import SquarespaceLogo from '../components/SquarespaceLogo';
import './QuestionPage.css';

interface Props extends HTMLAttributes<HTMLElement>, RouteComponentProps {
    question: string;
    description: string;

    nextRoute: string;
    skipRoute?: string;
    backDisabled?: boolean;

    answered: boolean;
}

const QuestionPage: React.FC<Props> = (props) => {
    return (
        <IonPage id={props.id} className='question-page'>
            <IonHeader>
                <SquarespaceLogo color='black' className='header-icon' />
            </IonHeader>

            <IonContent>
                <h1 className='heading'>{props.question}</h1>
                <p className='description-font'>{props.description}</p>
                <div className='interactive-section'>{props.children}</div>
            </IonContent>

            <IonFooter className="ion-padding">
                <NavigationButton hidden={props.backDisabled ?? false}
                                  color={COLORS.dark} background={'transparent'} border={COLORS.dark}
                                  onClick={() => props.history.goBack()}>
                    BACK
                </NavigationButton>
                <span className='ion-float-right'>
                    <NavigationButton color={COLORS.dark} background={'transparent'}
                                      onClick={() => props.history.push(props.skipRoute ?? props.nextRoute)}>
                        SKIP
                    </NavigationButton>
                    <NavigationButton disabled={!props.answered}
                                      color={props.answered ? undefined : COLORS.textGray}
                                      background={props.answered ? undefined : COLORS.borderGray}
                                      onClick={() => props.history.push(props.nextRoute)}>
                        NEXT
                    </NavigationButton>
                </span>
            </IonFooter>
        </IonPage>
    );
};

export default QuestionPage;
