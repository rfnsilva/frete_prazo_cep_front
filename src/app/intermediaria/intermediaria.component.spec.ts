import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediariaComponent } from './intermediaria.component';

describe('IntermediariaComponent', () => {
  let component: IntermediariaComponent;
  let fixture: ComponentFixture<IntermediariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermediariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
