import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-compte-creation',
  templateUrl: './compte-creation.component.html',
  styleUrls: ['./compte-creation.component.scss'],
})
export class CompteCreationComponent implements OnInit {
  email: string;
  password: string;

  goToCompte(){
    this.router.navigateByUrl('compteConnexion');
  }

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {}


  register()
  {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
      this.router.navigateByUrl('');
    }, (err) => {
      alert(err);
    });
  }
}
