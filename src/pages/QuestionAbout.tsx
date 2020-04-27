import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { ABOUT_SUGGESTIONS, QUESTION_PROMPTS } from '../common/constants';
import QuestionPage from '../components/QuestionPage';
import SearchWithSuggestions from '../components/SearchWithSuggestions';

const MAX_SUGGESTIONS = 6;

const QuestionAbout: React.FC<RouteComponentProps> = (props) => {
    const [ about, setAbout ] = useState<string | null>(null);

    const [ question, description ] = QUESTION_PROMPTS.about;
    const nextRoute = `/question/goals`;

    return (
        <QuestionPage {...props} id='question-about-page'
                      question={question} description={description}
                      nextRoute={nextRoute} backDisabled
                      answered={about !== null}>

            <SearchWithSuggestions maxSuggestions={MAX_SUGGESTIONS}
                                   possibleValues={ABOUT_SUGGESTIONS}
                                   selected={about}
                                   onSelectChange={(selected) => setAbout(selected)} />

        </QuestionPage>
    );
};

export default QuestionAbout;