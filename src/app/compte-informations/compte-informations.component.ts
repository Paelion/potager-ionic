import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte-informations',
  templateUrl: './compte-informations.component.html',
  styleUrls: ['./compte-informations.component.scss'],
})
export class CompteInformationsComponent implements OnInit {

  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  goToCommandes(){
    this.router.navigateByUrl('commandeRecap');
  }

  goToInformations(){
    this.router.navigateByUrl('informations');
  }

  goToModePaiement(){
    this.router.navigateByUrl('modePaiement');
  }

  goToMDP(){
    this.router.navigateByUrl('motDePasse');
  }

  goToContact(){
    this.router.navigateByUrl('contact');
  }

  goToDeconnexion(){
    this.router.navigateByUrl('compteConnexion');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
