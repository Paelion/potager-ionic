import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message-envoye',
  templateUrl: './message-envoye.component.html',
  styleUrls: ['./message-envoye.component.scss'],
})
export class MessageEnvoyeComponent implements OnInit {


  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  goToContact(){
    this.router.navigateByUrl('contact');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
