import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-single',
  templateUrl: './produit-single.component.html',
  styleUrls: ['./produit-single.component.scss'],
})
export class ProduitSingleComponent implements OnInit {

  goToMateriel(){
    this.router.navigateByUrl('materiel');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
