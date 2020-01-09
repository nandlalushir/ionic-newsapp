import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contact } from './contact';

describe('Tab3Page', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Contact],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
