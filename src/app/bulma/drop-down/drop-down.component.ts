import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bu-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  isActive: boolean;
  @Output() onOpen = new EventEmitter();
  @Output() onClose = new EventEmitter();

  @HostListener('document:keyup.esc') onESC() {
    this.triggerClose();
  }

  constructor() {
  }

  ngOnInit() {
    this.isActive = false;
  }

  triggerOpen(): void {
    this.isActive = true;
    this.onOpen.emit();
  }

  triggerClose(): void {
    this.isActive = false;
    this.onClose.emit();
  }

}
