import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle } from '@ionic/react';
import React, { Suspense } from 'react';
import './Home.css';

import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { rootConnector } from '../store/thunks/index.thunks';

export interface HomeGeneralProps {
  switchTheme: Function;
}

const Home: React.FC<HomeGeneralProps> = (props) => {

  const darkTheme: boolean | undefined = useSelector((state: RootState) => {
    return state.theme.dark;
  });

  async function toggleTheme() {    
    await props.switchTheme();
  }


  return (
  <Suspense fallback="loading">
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Redux Thunk API Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonItem className="item-input item-radio with-padding">
        <IonLabel>
          {darkTheme ? "Dark" : "Light" } {darkTheme ? '🌑' : '☀️'}
        </IonLabel>
        <IonToggle slot="end" checked={darkTheme} mode="md" color="medium" onClick={() => toggleTheme()}></IonToggle>
      </IonItem>
      </IonContent>
    </IonPage>
  </Suspense>  
  );
};

export default rootConnector(Home);
