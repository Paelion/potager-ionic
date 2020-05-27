import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-informations-client',
  templateUrl: './informations-client.component.html',
  styleUrls: ['./informations-client.component.scss'],
})
export class InformationsClientComponent implements OnInit {

  goToInformations(){
    this.router.navigateByUrl('compteInformations');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
