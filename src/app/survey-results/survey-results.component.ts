interface Question { id: string; text: string; answers: string[]; selected: boolean };

import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import survey1Data from "../../assets/surveys/survey1.json";
import survey2Data from "../../assets/surveys/survey2.json";
import survey3Data from "../../assets/surveys/survey3.json";

@Component({
  selector: 'app-survey-results',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './survey-results.component.html',
  styleUrl: './survey-results.component.css'
})
export class SurveyResultsComponent {
  surveyNumber: number = 1;
  selectedSurvey: Question[] | null = survey1Data;
  selectedQuestions: number[] = [];

  selectSurvey = (i: number) => {
    this.surveyNumber = i;
    switch (i) {
      case 1:
        this.selectedSurvey = survey1Data;
        break;
      case 2:
        this.selectedSurvey = survey2Data;
        break;
      case 3:
        this.selectedSurvey = survey3Data;
        break;
      case 4:
        this.selectedSurvey = null;
        break;
    }
  }

  selectQuestion = (i: number) => {
    this.selectedSurvey![i].selected = !this.selectedSurvey![i].selected;
  }
}
