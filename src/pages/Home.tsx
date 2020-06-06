import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { Suspense } from 'react';
import './Home.css';

import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { rootConnector } from '../store/thunks/index.thunks';

export interface HomeGeneralProps {
  switchTheme: Function;
  setLanguage: Function;
}

const Home: React.FC<HomeGeneralProps> = (props) => {
  
  const darkTheme: boolean | undefined = useSelector((state: RootState) => {
    return state.theme.dark; 
  });  
  

  const Language: string | undefined = useSelector((state: RootState) => { 
    return state.language.lang; 
  });  
  

  // const Language: string = useSelector((state: RootState) => state.language.lang);
  // const Language: string | undefined = useSelector((state: RootState) => state.language.lang);
  //const [Language, setLanguage] = useState('');


  /*
    const Language: string = useSelector((state: RootState) => { 
      return state.language.lang; 
    }); 
   async function changeLanuage(lang: any) {       
     await props.setLanguage(lang);
   }
  async function toggleTheme() {    
    await props.switchTheme();
  }
  

value={Language}

  */
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
          <IonItem className="item-input item-radio with-padding">
            <IonLabel>
              {darkTheme ? "Dark" : "Light" } {darkTheme ? '🌑' : '☀️'}
            </IonLabel>
            <IonToggle slot="end" checked={darkTheme} mode="md" color="medium" onClick={() => props.switchTheme()}></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Language</IonLabel>
            <IonSelect value={Language} okText="Okay" cancelText="Dismiss" onIonChange={e => props.setLanguage(e.detail.value)}>
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

export default rootConnector(Home);
