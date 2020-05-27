import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande-recap',
  templateUrl: './commande-recap.component.html',
  styleUrls: ['./commande-recap.component.scss'],
})
export class CommandeRecapComponent implements OnInit {

  goToCommandeDetail(){
    this.router.navigateByUrl('commandeDetail');
  }

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }
  constructor(public router: Router) { }

  ngOnInit() {}

}
