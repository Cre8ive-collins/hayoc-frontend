import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientencounterComponent } from './patientencounter.component';

describe('PatientencounterComponent', () => {
  let component: PatientencounterComponent;
  let fixture: ComponentFixture<PatientencounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientencounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientencounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
