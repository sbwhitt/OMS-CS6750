import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSurveyResultsComponent } from './team-survey-results.component';

describe('TeamSurveyResultsComponent', () => {
  let component: TeamSurveyResultsComponent;
  let fixture: ComponentFixture<TeamSurveyResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSurveyResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamSurveyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
