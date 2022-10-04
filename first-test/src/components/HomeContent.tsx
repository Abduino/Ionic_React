import './ExploreContainer.css';
import { IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React, { useState } from 'react';
import { star } from 'ionicons/icons';

/* interface ContainerProps {
  name: string;
} */

const HomeContent: React.FC = () => {
    const [utext, setuText] = useState<string>();
    const [ptext, setpText] = useState<string>();
    const [number, setNumber] = useState<number>();
  return (
    <div className="container">
    

        <IonCard>
            <IonItem>
                <IonCardHeader>
                <IonCardTitle>Login</IonCardTitle>
                </IonCardHeader>
            </IonItem>
 
      

          <IonItem>
            <IonLabel position="floating"><p>User Name</p></IonLabel>
            <IonInput value={utext}></IonInput>
            </IonItem>
                <IonItem>
            <IonLabel position="floating"><p>Password</p></IonLabel>
            <IonInput value={ptext}></IonInput>
          </IonItem>
          
          <IonButton expand="block">Login</IonButton>
          <IonButton expand="block" fill="outline">Register</IonButton>
        


          <IonCardContent>

      </IonCardContent>
        </IonCard>

 
    </div>
  );
};

export default HomeContent;