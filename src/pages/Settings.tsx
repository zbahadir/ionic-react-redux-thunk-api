import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { Suspense } from 'react';
import './Home.css';

import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { rootConnector } from '../store/thunks/index.thunks';

export interface HomeGeneralProps {
    updateSettings: Function;
}

const Settings: React.FC<HomeGeneralProps> = (props) => {
   
   const settings: any | undefined = useSelector((state: RootState) => { 
    return state.settings.settings; 
  });

  return (
  <Suspense fallback="loading">
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Redux Thunk API Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
        <IonItem>
            <IonLabel position="stacked">Theme</IonLabel>
            <IonSelect value={settings.theme} okText="Okay" cancelText="Dismiss" onIonChange={e => props.updateSettings('theme:'+e.detail.value)}>
            <IonSelectOption value="dark">Dark</IonSelectOption>
            <IonSelectOption value="light">Light</IonSelectOption>
            <IonSelectOption value="default">Default</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Language</IonLabel>
            <IonSelect value={settings.language} okText="Okay" cancelText="Dismiss" onIonChange={e => props.updateSettings('language:'+e.detail.value)}>
            <IonSelectOption value="en">English</IonSelectOption>
            <IonSelectOption value="tr">Turkish</IonSelectOption>
            <IonSelectOption value="fr">French</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  </Suspense>  
  );
};

export default rootConnector(Settings);
