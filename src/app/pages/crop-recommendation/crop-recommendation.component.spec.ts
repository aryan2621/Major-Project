import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropRecommendationComponent } from './crop-recommendation.component';

describe('CropRecommendationComponent', () => {
  let component: CropRecommendationComponent;
  let fixture: ComponentFixture<CropRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
