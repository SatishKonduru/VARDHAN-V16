import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent {
  @Input() postman: any;

  @Output() vardhan = new EventEmitter();
  sendReply() {
    this.vardhan.emit('This is coming from child(receiver component)');
  }
}
