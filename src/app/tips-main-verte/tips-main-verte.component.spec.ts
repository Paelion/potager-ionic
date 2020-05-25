import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipsMainVerteComponent } from './tips-main-verte.component';

describe('TipsMainVerteComponent', () => {
  let component: TipsMainVerteComponent;
  let fixture: ComponentFixture<TipsMainVerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsMainVerteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipsMainVerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
