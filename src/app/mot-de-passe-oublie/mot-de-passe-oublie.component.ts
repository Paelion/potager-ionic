import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';




@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss'],
})
export class MotDePasseOublieComponent implements OnInit {

  email: string;

  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}

  reset()
  {
    this.afAuth.sendPasswordResetEmail(this.email).then((data) => {
      this.router.navigateByUrl('messageEnvoye');


    }, (err) => {
      alert(err);
    });
  }


}
