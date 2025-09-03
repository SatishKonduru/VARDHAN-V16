import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

interface QuestionItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  preserveWhitespaces: true,
})
export class QuestionnaireComponent {
  // questions: string[] = [
  //   'What is your name?',
  //   'What is your favorite language? ',
  //   'What is your goal in learning Angular?',
  // ];

  // @ViewChildren(QuestionComponent)
  // questionComponent!: QueryList<QuestionComponent>;
  // allAnswered = false;
  // checked = false;
  // checkAnswers() {
  //   this.checked = true;
  //   this.allAnswered = this.questionComponent
  //     .toArray()
  //     .every((q) => q.isAnswered());
  // }

  newQuestions: QuestionItem[] = [
    { id: 1, text: 'What is your name?' },
    { id: 2, text: 'What is your favorite Language?' },
  ];

  @ViewChildren(QuestionComponent)
  qustionComponents!: QueryList<QuestionComponent>;

  newQuestion: string = '';
  nextId = 2;
  allAnswered = false;
  checked = false;
  checkAnswers() {
    this.checked = true;
    this.allAnswered = this.qustionComponents
      .toArray()
      .every((q) => q.isAnswered());
  }
  removeQuestion(index: number) {
    this.newQuestions.splice(index, 1);
  }
  addQuestion() {
    if (this.newQuestion.trim()) {
      this.newQuestions.push({
        id: this.nextId + 1,
        text: this.newQuestion.trim(),
      });
    }
    this.newQuestion = '';
  }
}
