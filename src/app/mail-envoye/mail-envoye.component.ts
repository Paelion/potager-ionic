import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mail-envoye',
  templateUrl: './mail-envoye.component.html',
  styleUrls: ['./mail-envoye.component.scss'],
})
export class MailEnvoyeComponent implements OnInit {

  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  goToConnexion(){
    this.router.navigateByUrl('compteConnexion');
  }


  constructor(public router: Router) { }

  ngOnInit() {}

}
