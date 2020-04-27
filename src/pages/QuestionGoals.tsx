import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { GOALS, QUESTION_PROMPTS } from '../common/constants';
import { immutableAdd, immutableDelete } from '../common/util';
import QuestionPage from '../components/QuestionPage';
import TopGoalCheckbox from '../components/TopGoalCheckbox';
import './QuestionGoals.css';

const QuestionGoals: React.FC<RouteComponentProps> = (props) => {
    const [ goals, setGoals ] = useState(new Set<string>());

    const [ question, description ] = QUESTION_PROMPTS.goals;
    const nextRoute = `/question/name`;

    return (
        <QuestionPage {...props}
                      question={question} description={description}
                      nextRoute={nextRoute}
                      answered={goals.size > 0}>

            <div>{GOALS.map(goal =>
                <TopGoalCheckbox key={goal} text={goal} checked={goals.has(goal)}
                                 onChange={(checked) =>
                                     setGoals((checked ? immutableAdd : immutableDelete)(goals, goal))} />
            )}</div>

        </QuestionPage>
    );
};

export default QuestionGoals;