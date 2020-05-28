import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var indexFunction;

@Component({
  selector: 'app-graines',
  templateUrl: './graines.component.html',
  styleUrls: ['./graines.component.scss'],
})
export class GrainesComponent implements OnInit {

  array: any[] = [
    {
      url: '../../assets/radis.png',
      titre: 'Radis'
    },
    {
      url: '../../assets/fenouille.png',
      titre: 'Fenouil'
    },
    {
      url: '../../assets/courge.png',
      titre: 'Courge'
    },
    {
      url: '../../assets/carotte.png',
      titre: 'Carotte'
    },
    {
      url: '../../assets/poivron.png',
      titre: 'Poivron'
    },
    {
      url: '../../assets/pomme de terre.png',
      titre: 'Pomme de terre'
    },
    {
      url: '../../assets/salade.png',
      titre: 'Salade'
    },
    {
      url: '../../assets/tomate.png',
      titre: 'Tomate'
    },
    {
      url: '../../assets/radis.png',
      titre: 'Radis'
    },
    {
      url: '../../assets/fenouille.png',
      titre: 'Fenouil'
    },
    {
      url: '../../assets/courge.png',
      titre: 'Courge'
    },
    {
      url: '../../assets/carotte.png',
      titre: 'Carotte'
    },
    {
      url: '../../assets/poivron.png',
      titre: 'Poivron'
    },
    {
      url: '../../assets/pomme de terre.png',
      titre: 'Pomme de terre'
    },
    {
      url: '../../assets/salade.png',
      titre: 'Salade'
    },
    {
      url: '../../assets/tomate.png',
      titre: 'Tomate'
    }
  ];



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

  callIndex(){
    indexFunction();
  }


}
