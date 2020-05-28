import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestModalComponent } from './test-modal.component';

describe('TestModalComponent', () => {
  let component: TestModalComponent;
  let fixture: ComponentFixture<TestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
