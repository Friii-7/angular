import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractresticasEmpleadoCComponent } from './caractresticas-empleado-c.component';

describe('CaractresticasEmpleadoCComponent', () => {
  let component: CaractresticasEmpleadoCComponent;
  let fixture: ComponentFixture<CaractresticasEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractresticasEmpleadoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaractresticasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
