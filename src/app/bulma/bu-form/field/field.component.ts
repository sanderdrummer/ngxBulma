import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bu-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  @HostBinding('class') fieldClass = 'field';

  @Input() label: string;
  @Input() isLoading: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  focus() {

  }

}
