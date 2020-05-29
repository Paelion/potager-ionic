import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  goToAccueil(){
    this.router.navigateByUrl('home');
  }

  goToEnvoye(){
    this.router.navigateByUrl('messageEnvoye');
  }


  constructor(public router: Router) { }

  ngOnInit() {}

}
