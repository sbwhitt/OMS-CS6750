interface Question { id: string; text: string; answers: string[]; selected: boolean };

import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import teamSurveyData from "../../assets/surveys/team_survey.json";
import teamEvalSurveyData from "../../assets/surveys/team_eval_survey.json";

@Component({
  selector: 'app-team-survey-results',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './team-survey-results.component.html',
  styleUrl: './team-survey-results.component.css'
})
export class TeamSurveyResultsComponent {
  surveyNumber: number = 1;
  surveyTitle: string = "";
  selectedSurvey: Question[] | null = null;
  selectedQuestions: number[] = [];

  selectSurvey(i: number) {
    this.surveyNumber = i;
    switch (i) {
      case 0:
        this.selectedSurvey = null;
        break;
      case 1:
        this.surveyTitle = "Team Sudowoodo Initial Needfinding Survey Results";
        this.selectedSurvey = teamSurveyData;
        break;
      case 2:
        this.surveyTitle = "Team Sudowoodo Prototype Evaluation Survey Results";
        this.selectedSurvey = teamEvalSurveyData;
        break;
    }
  }

  deselectSurvey() {
    this.selectedSurvey = null;
  }

  selectQuestion(i: number) {
    this.selectedSurvey![i].selected = !this.selectedSurvey![i].selected;
  }
}
