import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bu-modal',
  templateUrl: './bu-modal.component.html',
  styleUrls: ['./bu-modal.component.scss']
})
export class BuModalComponent implements OnInit {
  isActive: boolean;
  @Output() onOpen  = new EventEmitter();
  @Output() onClose  = new EventEmitter();

  @HostListener('document:keyup.esc') onESC () {
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
