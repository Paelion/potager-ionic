import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-graine-single',
  templateUrl: './graine-single.component.html',
  styleUrls: ['./graine-single.component.scss'],
})
export class GraineSingleComponent implements OnInit {

  goToGraine(){
    this.router.navigateByUrl('graines');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
