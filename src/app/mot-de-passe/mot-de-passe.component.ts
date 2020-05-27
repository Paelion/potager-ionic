import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.scss'],
})
export class MotDePasseComponent implements OnInit {

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
