import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
})
export class Parent2Component {
  topicName = '@ViewChildren()';
  @ViewChildren('inputBox') inputBoxes: QueryList<ElementRef>;

  @ViewChildren(Child2Component) child2: QueryList<Child2Component>;

  ngAfterViewInit() {
    console.log('Returning Query List: ', this.inputBoxes);
    console.log(
      'Input Box value in AfterViewInit hook with "first": ',
      this.inputBoxes.first.nativeElement.value
    );
    console.log(
      'Input Box Value with "last": ',
      this.inputBoxes.last.nativeElement.value
    );
  }

  logValues() {
    this.inputBoxes.forEach((inputBox) => {
      console.log(inputBox.nativeElement.value);
    });
  }
  greetAll() {
    this.child2.forEach((child) => child.sayHello());
  }
}
