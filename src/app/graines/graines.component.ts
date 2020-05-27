import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-graines',
  templateUrl: './graines.component.html',
  styleUrls: ['./graines.component.scss'],
})
export class GrainesComponent implements OnInit {

  goToMenu(){
    this.router.navigateByUrl('menu');
  }

  goToMateriel(){
    this.router.navigateByUrl('materiel');
  }

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  goToGraineSingle(){
    this.router.navigateByUrl('graineSingle');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
