interface Question { id: string; text: string; answers: string[]; selected: boolean };

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import teamSurveyData from "../../assets/surveys/team_survey.json";

@Component({
  selector: 'app-team-survey-results',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './team-survey-results.component.html',
  styleUrl: './team-survey-results.component.css'
})
export class TeamSurveyResultsComponent {
  surveyTitle = "Team Sudowoodo Initial Needfinding Survey Results";
  surveyData = teamSurveyData;
  selectedQuestions: number[] = [];

  selectQuestion(i: number) {
    this.surveyData[i].selected = !this.surveyData[i].selected;
  }
}
