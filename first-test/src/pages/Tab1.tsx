import { IonItem, IonLabel,IonToggle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import HomeContent from '../components/HomeContent';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        <IonToggle enableOnOffLabels={true} slot="end"></IonToggle>
   
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="fade">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContent/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
