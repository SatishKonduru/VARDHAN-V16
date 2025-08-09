import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComp: ChildComponent;
  topicName = '@ViewChild() with Component Reference';

  ngAfterViewInit() {
    console.log('Child Message(from parent) :', this.childComp.childMessage);
  }
  callChildMethod() {
    this.childComp.showMessage();
  }
}
