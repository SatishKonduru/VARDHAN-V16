import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref-variables',
  templateUrl: './temp-ref-variables.component.html',
  styleUrls: ['./temp-ref-variables.component.css'],
})
export class TempRefVariablesComponent {
  message = '';
  message2 = '';
  getInputValue(value: any) {
    this.message = value;
  }
  // getInputValue(e: InputEvent) {
  //   this.message = (e.target as HTMLInputElement).value;
  // }
}
