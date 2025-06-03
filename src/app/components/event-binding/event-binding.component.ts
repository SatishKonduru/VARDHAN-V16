import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  preserveWhitespaces: true,
})
export class EventBindingComponent {
  name = '';
  result = '';
  inputValue = '';
  getName() {
    this.name = 'Satish';
  }
  clearName() {
    this.name = '';
  }
  onDoubleClick() {
    this.result = 'You Double Clicked this Button';
  }

  // onInput(e: InputEvent) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputValue = value;
  // }
  onInput(value: any) {
    this.inputValue = value;
  }
}
