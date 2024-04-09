import { Routes } from '@angular/router';
import { PrototypeComponent } from './prototype/prototype.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';
import { TeamSurveyResultsComponent } from './team-survey-results/team-survey-results.component';

export const routes: Routes = [
    {path: "", component: PrototypeComponent},
    {path: "prototype", component: PrototypeComponent},
    {path: "surveys", component: SurveyResultsComponent},
    {path: "team-surveys", component: TeamSurveyResultsComponent}
];
