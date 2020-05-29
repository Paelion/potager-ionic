import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {config} from './firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HomePageComponent} from './home-page/home-page.component';
import {GrainesComponent} from './graines/graines.component';
import {ContactComponent} from './contact/contact.component';
import {MaterielComponent} from './materiel/materiel.component';
import {PanierComponent} from './panier/panier.component';
import {ProduitSingleComponent} from './produit-single/produit-single.component';
import {TipsMainVerteComponent} from './tips-main-verte/tips-main-verte.component';
import {GraineSingleComponent} from './graine-single/graine-single.component';
import {CompteConnexionComponent} from './compte-connexion/compte-connexion.component';
import {CompteCreationComponent} from './compte-creation/compte-creation.component';
import {CompteInformationsComponent} from './compte-informations/compte-informations.component';
import {MotDePasseComponent} from './mot-de-passe/mot-de-passe.component';
import {MotDePasseOublieComponent} from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import {InformationsClientComponent} from './informations-client/informations-client.component';
import {ModePaiementComponent} from './mode-paiement/mode-paiement.component';
import {ModePaiementAjoutComponent} from './mode-paiement-ajout/mode-paiement-ajout.component';
import {CommandeEmptyComponent} from './commande-empty/commande-empty.component';
import {CommandeRecapComponent} from './commande-recap/commande-recap.component';
import {CommandeDetailComponent} from './commande-detail/commande-detail.component';
import {TipsSingleComponent} from './tips-single/tips-single.component';
import {MenuComponent} from './menu/menu.component';
import {MessageEnvoyeComponent} from './message-envoye/message-envoye.component';
import {MailEnvoyeComponent} from './mail-envoye/mail-envoye.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';


@NgModule({

    declarations: [AppComponent, HomePageComponent, GrainesComponent, ContactComponent, MaterielComponent, PanierComponent, ProduitSingleComponent, TipsMainVerteComponent, GraineSingleComponent, CompteConnexionComponent, CompteCreationComponent, CompteInformationsComponent, MotDePasseComponent, MotDePasseOublieComponent, InformationsClientComponent, ModePaiementComponent, ModePaiementAjoutComponent, TipsSingleComponent, CommandeEmptyComponent, CommandeRecapComponent, CommandeDetailComponent, MenuComponent, MessageEnvoyeComponent, MailEnvoyeComponent],

    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(config), AngularFireAuthModule, AngularFirestoreModule, FormsModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
