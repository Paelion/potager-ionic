import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.scss'],
})
export class CommandeDetailComponent implements OnInit {

  goToCommandeRecap(){
    this.router.navigateByUrl('commandeRecap');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
