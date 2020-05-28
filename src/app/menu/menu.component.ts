import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {



  goToAccueil(){
    this.router.navigateByUrl('home');
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

  constructor(public router: Router,  public afAuth: AngularFireAuth) { }

  ngOnInit() {}
  logOut()
  {
    this.afAuth.signOut().then((user) => {
      localStorage.clear();
      this.router.navigateByUrl('');
    });
  }

}
