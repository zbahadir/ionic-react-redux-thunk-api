import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import './Home.css';

import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { rootConnector } from '../store/thunks/index.thunks';

export interface HomeGeneralProps {
    updateSettings: Function;
}


const Test: React.FC<HomeGeneralProps> = (props) => {  

    const settings: any | undefined = useSelector((state: RootState) => { 
        return state.settings.settings; 
      });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IDB-KeyVal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonItem>
            <IonLabel position="stacked">Language</IonLabel>
            <IonSelect value={settings.language} okText="Okay" cancelText="Dismiss" onIonChange={e => props.updateSettings('language:'+e.detail.value)}>
            <IonSelectOption value="en">English</IonSelectOption>
            <IonSelectOption value="tr">Turkish</IonSelectOption>
            <IonSelectOption value="fr">French</IonSelectOption>
            </IonSelect>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default rootConnector(Test);
