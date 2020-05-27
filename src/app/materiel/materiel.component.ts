import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.scss'],
})
export class MaterielComponent implements OnInit {

  array: any[] = [
    {
      url: '../../assets/tuyau.png',
      titre: 'Tuyau'
    },
    {
      url: '../../assets/pistolet.png',
      titre: 'Pistolet'
    },
    {
      url: '../../assets/tuyau1.png',
      titre: 'Tuyau'
    },
    {
      url: '../../assets/fourche.png',
      titre: 'Fourche'
    },
    {
      url: '../../assets/sécateur.png',
      titre: 'Sécateur en Titane'
    },
    {
      url: '../../assets/sécateur1.png',
      titre: 'Sécateur'
    },
    {
      url: '../../assets/rateau.png',
      titre: 'Râteau'
    },
    {
      url: '../../assets/rateau1.png',
      titre: 'Rateau à Feuille'
    },
    {
      url: '../../assets/tuyau.png',
      titre: 'Tuyau'
    },
    {
      url: '../../assets/pistolet.png',
      titre: 'Pistolet'
    },
    {
      url: '../../assets/tuyau1.png',
      titre: 'Tuyau'
    },
    {
      url: '../../assets/fourche.png',
      titre: 'Fourche'
    },
    {
      url: '../../assets/sécateur.png',
      titre: 'Sécateur en titane'
    },
    {
      url: '../../assets/sécateur1.png',
      titre: 'Sécateur'
    }
  ];


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
