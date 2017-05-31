import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {StringFilterService} from '../shared/string-filter.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'bu-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit, OnChanges {

  @Input() validators;
  @Input() query: string;
  @Input() list: any[];
  @Input() display: string;
  @Input() selected: any[];
  @Input() listLimit = 10;

  @Output() onSelect = new EventEmitter();

  @ViewChild('dropDown') dropDown;

  filteredList: any[];
  queryControl: FormControl;


  @HostListener('keydown', ['$event.code']) onKeydown(code) {
    switch (code) {
      case 'ArrowUp':
        this.selectPrev();
        break;
      case 'ArrowDown':
        this.selectNext();
        break;
      case 'Escape':
        this.resetInput();
        break;
      case 'Enter':
        this.select(this.selected);
        break;
    }
  }

  constructor(private filterService: StringFilterService) {
    this.queryControl = new FormControl();
    this.queryControl.valueChanges.subscribe(query => this.filter(query));
  }

  ngOnInit() {
    console.log(this.dropDown);
  }

  ngOnChanges(changes) {
    if (changes.list && changes.list.currentValue) {
      this.filteredList = this.filterService.filter(this.list, this.display, '');
    }
  }

  selectNext() {
    this.dropDown.triggerOpen();

    const lastIndex = Math.min(this.listLimit, this.list.length) - 1;
    let index = this.list.indexOf(this.selected);
    index = index >= this.listLimit ? lastIndex : index;

    index += 1;

    index = index >= this.listLimit ? lastIndex : index;

    this.selectByIndex(index);
  }

  selectPrev() {
    let index = this.list.indexOf(this.selected);
    index = index >= this.listLimit ? 0 : index;

    index -= 1;

    index = index >= this.listLimit ? 0 : index;

    this.selectByIndex(index);
  }

  selectByIndex(index: number): void {
    const nextItem = this.list[index];

    if (nextItem) {
      this.preselect(nextItem);
    }
  }

  resetInput() {
    this.selected = null;
    this.queryControl.reset();
  }

  filter(query: string) {
    const filteredList = this.filterService
      .filter(this.list, this.display, query)
      .slice(0, this.listLimit);

    if (filteredList.length) {
      this.dropDown.triggerOpen();
    }

    this.filteredList = filteredList;
  }

  preselect(item): void {
    if (item) {
      this.selected = item;
    }
  }

  select(item) {
    if (item && item[this.display]) {
      this.onSelect.emit({selected: item});
      this.queryControl.setValue(item[this.display]);
      this.dropDown.triggerClose();
    }

  }
}
