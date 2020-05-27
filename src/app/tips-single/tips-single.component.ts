import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tips-single',
  templateUrl: './tips-single.component.html',
  styleUrls: ['./tips-single.component.scss'],
})
export class TipsSingleComponent implements OnInit {

  goToTips(){
    this.router.navigateByUrl('tipsMainVerte');
  }

  constructor(public router: Router) { }

  ngOnInit() {}

}
