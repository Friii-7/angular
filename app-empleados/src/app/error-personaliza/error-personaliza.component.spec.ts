import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalizaComponent } from './error-personaliza.component';

describe('ErrorPersonalizaComponent', () => {
  let component: ErrorPersonalizaComponent;
  let fixture: ComponentFixture<ErrorPersonalizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPersonalizaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPersonalizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
