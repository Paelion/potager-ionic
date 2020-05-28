import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss'],
})
export class TestModalComponent implements OnInit {

  @Input() data: any;
  @Input() id: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalController.dismiss();
  }

}
