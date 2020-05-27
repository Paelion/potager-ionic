import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte-connexion',
  templateUrl: './compte-connexion.component.html',
  styleUrls: ['./compte-connexion.component.scss'],
})
export class CompteConnexionComponent implements OnInit {

  goToAccueil(){
    this.router.navigateByUrl('');
  }

  goToInscription(){
    this.router.navigateByUrl('compteCreation');
  }

  goToMDP(){
    this.router.navigateByUrl('motDePasseOublie');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
