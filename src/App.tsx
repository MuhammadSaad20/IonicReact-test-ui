import { 
  
  IonApp,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonTitle,
  IonCardTitle ,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonButton,
  IonFooter,



} from '@ionic/react';

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
import React, {useRef,useState} from 'react';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  

  const [calAns,setAns]=useState<number>();
  const [calcSel, setSel] = useState<string>();

  const AmountInput=useRef<HTMLIonInputElement>(null);
  const PredInput = useRef<HTMLIonInputElement>(null);
  
  const calcProfit=()=>{
    //console.log("PROFIT")
    const a=AmountInput.current!.value;
    //const b= 
    const c=PredInput.current!.value;
    
    if(!a || !c){
      return;
    }
    //let ans= +a/+c;
    //console.log(typeof(ans));
    let myval=0;
    if (calcSel=="bitcoin"){
      myval=10;
    }else if(calcSel=="ethrum"){
      myval=2.5;
    }else if(calcSel=="doggie"){
      myval=4
    }else if(calcSel=="tenup"){
        myval=1.5;
    }
    console.log(myval)
    
    const ans=(+a+myval)/+c;
    setAns(ans);
  
  }

  return (<IonApp >
    <IonHeader >
      <IonToolbar color="tertiary">
        <IonTitle class="ion-text-center" size="large">DEV NATION-DEMO</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    
    <IonContent color="warning">
      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle class="ion-text-center">PROFIT CALCULATOR</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid>
              <IonRow>
                
                <IonCol>
                    <IonItem>
                  <IonLabel position="stacked">Investing Amount</IonLabel>
                      <IonInput type="number" ref={AmountInput} placeholder="Enter Amount"></IonInput>
                    </IonItem>
                </IonCol>
                
                <IonCol>
                  <IonItem>
                      <IonLabel position="stacked">From</IonLabel>
                  <IonSelect onIonChange={e => setSel(e.detail.value)} placeholder="Crypto Value" interface="popover">
                        <IonSelectOption value="bitcoin">Bitcoin</IonSelectOption>
                        <IonSelectOption value="ethrum">Ethrum</IonSelectOption>
                        <IonSelectOption value="doggie">Doggie</IonSelectOption>
                        <IonSelectOption value="tenup">Tenup</IonSelectOption>
                      </IonSelect>
                    </IonItem>
                </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Prediction Amount</IonLabel>
                  <IonInput type="number" ref={PredInput} placeholder="Enter Prediction Amount"></IonInput>
                </IonItem>
              </IonCol>



            </IonRow>


           
          </IonGrid>
        
          
          <IonRow>

            <IonCol onClick={calcProfit} className="ion-text-right">
              <IonButton color="dark">Calculate</IonButton>
            </IonCol>
          </IonRow>

          
          
        </IonCardContent>

      </IonCard>
      { calAns && (
      <IonRow>
        <IonCol>
            <IonCard color="tertiary" mode="md">
            <IonCardContent  class="ion-text-center"><h2>Prediction Of Profit: {calAns} %</h2></IonCardContent>
          </IonCard>
        </IonCol>      
      </IonRow>)}

    </IonContent>
    
    <IonFooter >
      <IonToolbar color="tertiary">
        <IonTitle class="ion-text-center">  <h6> &copy; DEV NATION 2021</h6></IonTitle>
          </IonToolbar>
    </IonFooter>
</IonApp>);
};

export default App;
