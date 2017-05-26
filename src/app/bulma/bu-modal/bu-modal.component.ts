import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bu-bu-modal',
  templateUrl: './bu-modal.component.html',
  styleUrls: ['./bu-modal.component.scss']
})
export class BuModalComponent implements OnInit {
  isVisible: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isVisible = false;
  }

  open(): void {

  }

  close(): void {

  }

}
