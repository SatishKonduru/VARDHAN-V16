import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {
  message = 'This is is from Parent Component......';
  data: any;
  @Input() returnPostman;
}
