import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {GrainesComponent} from './graines/graines.component';
import {ContactComponent} from './contact/contact.component';
import {MaterielComponent} from './materiel/materiel.component';
import {PanierComponent} from './panier/panier.component';
import {ProduitSingleComponent} from './produit-single/produit-single.component';
import {TipsMainVerteComponent} from './tips-main-verte/tips-main-verte.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'graines', component: GrainesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'materiel', component: MaterielComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'produitSingle', component: ProduitSingleComponent},
  {path: 'tipsMainVerte', component: TipsMainVerteComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
