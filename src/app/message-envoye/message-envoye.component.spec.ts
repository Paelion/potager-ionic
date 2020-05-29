import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageEnvoyeComponent } from './message-envoye.component';

describe('MessageEnvoyeComponent', () => {
  let component: MessageEnvoyeComponent;
  let fixture: ComponentFixture<MessageEnvoyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEnvoyeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageEnvoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
