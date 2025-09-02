import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  questions: string[] = [
    'What is your name?',
    'What is your favorite language? ',
    'What is your goal in learning Angular?',
  ];

  @ViewChildren(QuestionComponent)
  questionComponent!: QueryList<QuestionComponent>;
  allAnswered = false;
  checked = false;
  checkAnswers() {
    this.checked = true;
    this.allAnswered = this.questionComponent
      .toArray()
      .every((q) => q.isAnswered());
  }
}
