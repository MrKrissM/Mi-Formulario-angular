import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormbuilderComponent } from './registro-formbuilder.component';

describe('RegistroFormbuilderComponent', () => {
  let component: RegistroFormbuilderComponent;
  let fixture: ComponentFixture<RegistroFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroFormbuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
