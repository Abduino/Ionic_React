import './ExploreContainer.css';
import { carOutline, cartOutline, ellipse, homeOutline, person, recordingOutline, square, triangle } from 'ionicons/icons';

import { IonAvatar, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React, { useState } from 'react';
import { star } from 'ionicons/icons';

/* interface ContainerProps {
  name: string;
} */

const ProfileContent: React.FC = () => {
    const [senPhone, setSPtext] = useState<string>();
    const [senFullname, setSFtext] = useState<string>();
    const [recPhone, setRPtext] = useState<string>();
    const [recFullname, setRFtext] = useState<string>();
    const [discription, setDtext] = useState<string>();
    const [number, setNumber] = useState<number>();
  return (
    <div className="container">
    

        <IonCard>
            <IonItem>
                <IonCardHeader>
                <IonCardTitle><h2>Create Request</h2></IonCardTitle>
                </IonCardHeader>
            </IonItem>
 
      

        <IonItem>
        <IonAvatar>
        <img alt="Silhouette of a person's head" src="Vector 23.svg"/>
      </IonAvatar>
        </IonItem>
        <IonItem lines='inset'>
            <IonLabel position="floating"><p>Sender Fullname</p></IonLabel>
            <IonInput value={senFullname}></IonInput>
        </IonItem>
        <IonItem lines='inset'>
            
            <IonLabel position="floating"><IonIcon icon={homeOutline} /></IonLabel>
           
            <IonInput value={recPhone}></IonInput>
        </IonItem>
        <IonItem lines='inset'>
            <IonLabel position="floating"><p>Receiver Fullname</p></IonLabel>
            <IonInput value={recFullname}></IonInput>
        </IonItem>
          
          <IonButton expand="block">Create Request</IonButton>
 
          <IonCardContent>

      </IonCardContent>
        </IonCard>

 
    </div>
  );
};

export default ProfileContent