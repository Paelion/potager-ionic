import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande-empty',
  templateUrl: './commande-empty.component.html',
  styleUrls: ['./commande-empty.component.scss'],
})
export class CommandeEmptyComponent implements OnInit {

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
