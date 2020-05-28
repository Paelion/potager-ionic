import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var indexFunction;

@Component({
  selector: 'app-graine-single',
  templateUrl: './graine-single.component.html',
  styleUrls: ['./graine-single.component.scss'],
})
export class GraineSingleComponent implements OnInit {



  constructor(public router: Router) { }

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  ngOnInit() {

  }

  callIndex(){
    indexFunction();
  }


}
