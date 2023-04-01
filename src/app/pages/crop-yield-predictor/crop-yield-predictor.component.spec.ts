import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropYieldPredictorComponent } from './crop-yield-predictor.component';

describe('CropYieldPredictorComponent', () => {
  let component: CropYieldPredictorComponent;
  let fixture: ComponentFixture<CropYieldPredictorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropYieldPredictorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropYieldPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
