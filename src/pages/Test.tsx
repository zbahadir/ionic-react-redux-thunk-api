import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect } from 'react';
import './Home.css';
import {get, set} from 'idb-keyval';

const Test: React.FC = () => {  

  let dizi = {
      name: 'Zafer',
      surname: "BAHADIR",
      country: "Tükiye"
  } 
    
  async function test() {
    await set('dizi', JSON.stringify(dizi));
  }

  async function testget() {
      const newdizi: string = await get("dizi");
      console.log('newdizi: ', JSON.parse(newdizi).name);
      
  }

  useEffect(() => {
    test();
    testget();
    //initSelectedTab();
    //setBackup(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IDB-KeyVal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      </IonContent>
    </IonPage>
  );
};

export default Test
