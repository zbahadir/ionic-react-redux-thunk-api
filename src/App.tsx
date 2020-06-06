import React, {useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Test from './pages/Test';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {RootProps, rootConnector} from './store/thunks/index.thunks';


import {Plugins} from '@capacitor/core';
const {SplashScreen} = Plugins;

const App: React.FC<RootProps> = (props: RootProps) => {

  async function init() {
    // Init theme first
    await props.initTheme();
    await props.initLanguage();
    await props.initSettings();
    await SplashScreen.hide();

    /*
    // Init data
    const promises = [];
    promises.push(props.initClients());
    promises.push(props.initActiveProjects());
    promises.push(props.initTask());
    promises.push(props.computeSummary());
    promises.push(props.listTasks(new Date()));
    promises.push(props.listProjectsInvoices());
    promises.push(props.initSettings());
    await Promise.all(promises);
    */
  }

  useEffect(() => {
    init();
    //initSelectedTab();
    //setBackup(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/settings" component={Settings} exact={true} />
        <Route path="/test" component={Test} exact={true} />

        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
    )
// const App: React.FC = () => (

};

//export default App;
export default rootConnector(App);
