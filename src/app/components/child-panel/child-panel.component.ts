import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-panel',
  templateUrl: './child-panel.component.html',
  styleUrls: ['./child-panel.component.css'],
})
export class ChildPanelComponent {
  @ContentChild('contentParagraph') paragraph: ElementRef;

  ngAfterContentInit() {
    this.paragraph = this.paragraph.nativeElement.textContent;
  }
}
