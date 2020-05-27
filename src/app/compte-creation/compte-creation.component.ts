import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte-creation',
  templateUrl: './compte-creation.component.html',
  styleUrls: ['./compte-creation.component.scss'],
})
export class CompteCreationComponent implements OnInit {

  goToCompte(){
    this.router.navigateByUrl('compteConnexion');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
