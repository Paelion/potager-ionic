import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss'],
})
export class MaterielComponent implements OnInit {

  goToMateriel(){
    this.router.navigateByUrl('materiel');
  }

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  goToMaterielSingle(){
    this.router.navigateByUrl('produitSingle');
  }

  goToMenu(){
    this.router.navigateByUrl('menu');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
