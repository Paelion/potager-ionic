import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {



  goToAccueil(){
    this.router.navigateByUrl('');
  }

  goToCompte(){
    this.router.navigateByUrl('compteConnexion');
  }

  goToPanier(){
    this.router.navigateByUrl('panier');
  }

  goToTips(){
    this.router.navigateByUrl('tipsMainVerte');
  }

  goToContact(){
    this.router.navigateByUrl('contact');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
