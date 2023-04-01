import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimOfProjectComponent } from './aim-of-project.component';

describe('AimOfProjectComponent', () => {
  let component: AimOfProjectComponent;
  let fixture: ComponentFixture<AimOfProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimOfProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
