import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizersRecommendationsComponent } from './fertilizers-recommendations.component';

describe('FertilizersRecommendationsComponent', () => {
  let component: FertilizersRecommendationsComponent;
  let fixture: ComponentFixture<FertilizersRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizersRecommendationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FertilizersRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
