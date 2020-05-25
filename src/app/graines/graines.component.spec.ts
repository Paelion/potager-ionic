import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrainesComponent } from './graines.component';

describe('GrainesComponent', () => {
  let component: GrainesComponent;
  let fixture: ComponentFixture<GrainesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
