import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {StringFilterService} from '../shared/string-filter.service';
import {FormControl, Validator} from '@angular/forms';

@Component({
  selector: 'bu-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
})
export class ComboBoxComponent implements OnInit, OnChanges {

  @Input() validators: Validator;
  @Input() query: string;
  @Input() list: any[];
  @Input() display: string;

  @Output() onSelect = new EventEmitter();

  filteredList: any[];
  queryControl: FormControl;


  constructor(private filterService: StringFilterService) {
    this.queryControl = new FormControl();
    this.queryControl.valueChanges.subscribe(query => this.filter(query));
  }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    if (changes.list && changes.list.currentValue) {
      this.filteredList = this.filterService.filter(this.list, this.display, '');
    }
  }


  filter(query: string) {
    this.filteredList = this.filterService.filter(this.list, this.display, query);
  }

  select(item): void {
    if (item) {
      this.onSelect.emit({selected: item});
    }
  }
}
