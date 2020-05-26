import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotDePasseOublieComponent } from './mot-de-passe-oublie.component';

describe('MotDePasseOublieComponent', () => {
  let component: MotDePasseOublieComponent;
  let fixture: ComponentFixture<MotDePasseOublieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotDePasseOublieComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotDePasseOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
