import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupConfig } from '@ionic/core'

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import './common/main.css';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import QuestionAbout from './pages/QuestionAbout';
import QuestionGoals from './pages/QuestionGoals';
import QuestionName from './pages/QuestionName';
import Styles from './pages/Styles';
import Preview from './pages/Preview';
import Publish from './pages/Publish';

setupConfig({
  mode: 'ios',
  animated: false
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <IonRouterOutlet id='main'>
            <Route component={NotFound} />

            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} exact/>

            <Redirect from='/questions' to='/question/about' exact />
            <Route path='/question/about' component={QuestionAbout} exact />
            <Route path='/question/goals' component={QuestionGoals} exact />
            <Route path='/question/name' component={QuestionName} exact />

            <Route path='/styles/:name?' component={Styles} />
            <Route path='/preview/:style/:name?' component={Preview} />
            <Route path='/publish/:style/:name?' component={Publish} />

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
