import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPrecoPrazoComponent } from './calc-preco-prazo.component';

describe('CalcPrecoPrazoComponent', () => {
  let component: CalcPrecoPrazoComponent;
  let fixture: ComponentFixture<CalcPrecoPrazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPrecoPrazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPrecoPrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
