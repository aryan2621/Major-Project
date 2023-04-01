import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerRecommendationComponent } from './fertilizer-recommendation.component';

describe('FertilizerRecommendationComponent', () => {
  let component: FertilizerRecommendationComponent;
  let fixture: ComponentFixture<FertilizerRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizerRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
