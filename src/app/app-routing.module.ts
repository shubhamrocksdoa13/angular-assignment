import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AnswerOneComponent } from './answers/answer-one/answer-one.component';
import { AnswerTwoComponent } from './answers/answer-two/answer-two.component';
import { AnswerThreeComponent } from './answers/answer-three/answer-three.component';
import { AnswerFourComponent } from './answers/answer-four/answer-four.component';

const routes: Routes = [
  {
    path: 'question-list',
   component: QuestionsListComponent
  },
  {
    path: 'answers/1',
   component: AnswerOneComponent
  },
  {
    path: 'answers/2',
   component: AnswerTwoComponent
  },
  {
    path: 'answers/3',
   component: AnswerThreeComponent
  },
  {
    path: 'answers/4',
   component: AnswerFourComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'question-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
