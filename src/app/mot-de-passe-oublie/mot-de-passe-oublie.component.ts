import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.scss'],
})
export class MotDePasseOublieComponent implements OnInit {

  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
