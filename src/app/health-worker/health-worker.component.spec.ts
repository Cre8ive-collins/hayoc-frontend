import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWorkerComponent } from './health-worker.component';

describe('HealthWorkerComponent', () => {
  let component: HealthWorkerComponent;
  let fixture: ComponentFixture<HealthWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
