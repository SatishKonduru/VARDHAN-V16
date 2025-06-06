import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';

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
  selectionValue = '';
  isChecked = false;
  selectedGender = '';
  keyupValue = '';
  keydownValue = '';
  keyEnterValue = '';
  focusStatus = '';
  contextValue = '';
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
  onChange = (e: MatSelectChange) => {
    this.selectionValue = e.value;
  };

  onCheckboxChange = (e: MatCheckboxChange) => {
    console.log(e);
    this.isChecked = e.checked;
  };

  onGenderChange = (e: MatRadioChange) => {
    this.selectedGender = e.value;
  };

  onKeyUp = (e: KeyboardEvent) => {
    this.keyupValue = e.key;
  };

  onKeyDown = (e: KeyboardEvent) => {
    this.keydownValue = e.key;
  };
  onEnterKey = () => {
    this.keyEnterValue = 'Enter Key Pressed';
  };
  onFocus = () => {
    this.focusStatus = 'Input GOT Focus';
  };
  onBlur = () => {
    this.focusStatus = 'Input LOST Focus';
  };
  onRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.contextValue = 'Right Clicked';
  };
}
