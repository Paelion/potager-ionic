import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tips-main-verte',
  templateUrl: './tips-main-verte.component.html',
  styleUrls: ['./tips-main-verte.component.scss'],
})
export class TipsMainVerteComponent implements OnInit {

  goToMateriel(){
    this.router.navigateByUrl('materiel');
  }

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  goToMenu(){
    this.router.navigateByUrl('menu');
  }

  goToTipSingle(){
    this.router.navigateByUrl('tipsSingle');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
