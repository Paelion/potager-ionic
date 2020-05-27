import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mode-paiement-ajout',
  templateUrl: './mode-paiement-ajout.component.html',
  styleUrls: ['./mode-paiement-ajout.component.scss'],
})
export class ModePaiementAjoutComponent implements OnInit {

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }


  constructor(public router: Router) { }

  ngOnInit() {}

}
