import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
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




const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'graines', component: GrainesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'materiel', component: MaterielComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produitSingle', component: ProduitSingleComponent},
  {path: 'tipsMainVerte', component: TipsMainVerteComponent},
  {path: 'graineSingle', component: GraineSingleComponent},
  {path: 'compteConnexion', component: CompteConnexionComponent},
  {path: 'compteCreation', component: CompteCreationComponent},
  {path: 'compteInformations', component: CompteInformationsComponent},
  {path: 'motDePasse', component: MotDePasseComponent},
  {path: 'motDePasseOublie', component: MotDePasseOublieComponent},
  {path: 'informations', component: InformationsClientComponent},
  {path: 'modePaiement', component: ModePaiementComponent},
  {path: 'modePaiementAjout', component: ModePaiementAjoutComponent},
  {path: 'commandeEmpty', component: CommandeEmptyComponent},
  {path: 'commandeRecap', component: CommandeRecapComponent},
  {path: 'commandeDetail', component: CommandeDetailComponent},
  {path: 'tipsSingle', component: TipsSingleComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'messageEnvoye', component: MessageEnvoyeComponent},
  {path: 'mailEnvoye', component: MailEnvoyeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
