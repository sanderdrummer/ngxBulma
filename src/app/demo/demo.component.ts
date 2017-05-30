import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bu-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  data;

  constructor() {

  }

  ngOnInit() {
    this.data = [
      {title: 'test1'},
      {title: 'test2'},
      {title: 'test3'},
    ];
  }

  test() {
    console.log('das ist ein test');
  }
}
