import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AnswerOneComponent } from './answers/answer-one/answer-one.component';
import { AnswerTwoComponent } from './answers/answer-two/answer-two.component';
import { AnswerThreeComponent } from './answers/answer-three/answer-three.component';
import { AnswerFourComponent } from './answers/answer-four/answer-four.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    AnswerOneComponent,
    AnswerTwoComponent,
    AnswerThreeComponent,
    AnswerFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
