import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { About } from './about';

describe('Tab2Page', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [About],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
