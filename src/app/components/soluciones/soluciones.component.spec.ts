import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesComponent } from './soluciones.component';

describe('SolucionesComponent', () => {
  let component: SolucionesComponent;
  let fixture: ComponentFixture<SolucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolucionesComponent]
    });
    fixture = TestBed.createComponent(SolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
