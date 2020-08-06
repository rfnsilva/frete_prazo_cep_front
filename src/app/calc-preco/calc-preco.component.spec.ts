import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPrecoComponent } from './calc-preco.component';

describe('CalcPrecoComponent', () => {
  let component: CalcPrecoComponent;
  let fixture: ComponentFixture<CalcPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
