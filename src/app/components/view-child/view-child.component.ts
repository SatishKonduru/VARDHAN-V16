import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent {
  topicName = '@ViewChild';
  @ViewChild('input') el: ElementRef;

  inputValueWithRef: any;
  inputValueWithViewChild: any;
  getValueWithRef(el: HTMLInputElement) {
    this.inputValueWithRef = el.value;
  }
  getValueWithViewChild() {
    this.inputValueWithViewChild = this.el.nativeElement.value;
  }
}
