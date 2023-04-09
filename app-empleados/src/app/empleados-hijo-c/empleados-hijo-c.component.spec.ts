import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosHijoCComponent } from './empleados-hijo-c.component';

describe('EmpleadosHijoCComponent', () => {
  let component: EmpleadosHijoCComponent;
  let fixture: ComponentFixture<EmpleadosHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosHijoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
