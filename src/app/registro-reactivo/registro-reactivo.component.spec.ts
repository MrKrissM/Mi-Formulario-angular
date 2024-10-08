import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReactivoComponent } from './registro-reactivo.component';

describe('RegistroReactivoComponent', () => {
  let component: RegistroReactivoComponent;
  let fixture: ComponentFixture<RegistroReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroReactivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
