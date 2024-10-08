import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaReactivaComponent } from './encuesta-reactiva.component';

describe('EncuestaReactivaComponent', () => {
  let component: EncuestaReactivaComponent;
  let fixture: ComponentFixture<EncuestaReactivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaReactivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaReactivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
