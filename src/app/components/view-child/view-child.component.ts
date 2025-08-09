import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  preserveWhitespaces: true,
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  topicName = '@ViewChild';
  @ViewChild('input') el: ElementRef;
  @ViewChild('input', { static: true }) inputStaticTrue: ElementRef;

  @ViewChild('input', { static: false }) inputStaticFalse: ElementRef;

  inputValueWithRef: any;
  inputValueWithViewChild: any;
  getValueWithRef(el: HTMLInputElement) {
    this.inputValueWithRef = el.value;
  }
  getValueWithViewChild() {
    this.inputValueWithViewChild = this.el.nativeElement.value;
  }

  ngOnInit(): void {
    console.log('ngOnInit Called....');
    console.log(
      'inputStaticTrue value in OnInit: ',
      this.inputStaticTrue.nativeElement.value
    );

    console.log(
      'inputStaticFalse value in OnInit: ',
      this.inputStaticFalse.nativeElement.value
    );
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called....');
    console.log(
      'inputStaticTrue value in AfterViewInit: ',
      this.inputStaticTrue.nativeElement.value
    );

    console.log(
      'inputStaticFalse value in AfterViewInit: ',
      this.inputStaticFalse.nativeElement.value
    );
  }
}
