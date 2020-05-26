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


const routes: Routes = [
  {path: '', component: HomePageComponent},
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
  {path: 'modePaiement', component: ModePaiementComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
