import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mode-paiement',
  templateUrl: './mode-paiement.component.html',
  styleUrls: ['./mode-paiement.component.scss'],
})
export class ModePaiementComponent implements OnInit {

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }

  goToAjoutCarte(){
    this.router.navigateByUrl('modePaiementAjout');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
