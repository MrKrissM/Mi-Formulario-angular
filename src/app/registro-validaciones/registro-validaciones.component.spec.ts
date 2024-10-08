import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroValidacionesComponent } from './registro-validaciones.component';

describe('RegistroValidacionesComponent', () => {
  let component: RegistroValidacionesComponent;
  let fixture: ComponentFixture<RegistroValidacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroValidacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroValidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
