import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-compte-connexion',
  templateUrl: './compte-connexion.component.html',
  styleUrls: ['./compte-connexion.component.scss'],
})
export class CompteConnexionComponent implements OnInit {

  email     : string;
  password  : string;

  goToAccueil(){
    this.router.navigateByUrl('');
  }

  goToInscription(){
    this.router.navigateByUrl('compteCreation');
  }

  goToMDP(){
    this.router.navigateByUrl('motDePasseOublie');
  }

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user =>
    {
      if (user)
      {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('');
      }
      else
      {
        localStorage.setItem('user', null);
      }
    });
  }
  login()
  {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((data) => {

      console.log(`congratulation you're in ! ${data}`);
    }, (err) => {
      alert(err);
    })
  }
}
