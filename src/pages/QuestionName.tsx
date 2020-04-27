import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { IonInput } from '@ionic/react';

import { QUESTION_PROMPTS } from '../common/constants';
import QuestionPage from '../components/QuestionPage';
import './QuestionName.css';

const QuestionName: React.FC<RouteComponentProps> = (props) => {
    const [ name, setName ] = useState('');

    const [ question, description ] = QUESTION_PROMPTS.name;
    const skipRoute = `/styles`;
    const nextRoute = `/styles/${name}`;

    return (
        <QuestionPage {...props} id='question-name-page'
                      question={question} description={description}
                      nextRoute={nextRoute} skipRoute={skipRoute}
                      answered={name !== ''}>

            <IonInput className='ion-padding light-font'
                      onIonChange={(e) => setName((e.detail.value ?? '').trim())} />

        </QuestionPage>
    );
};

export default QuestionName;