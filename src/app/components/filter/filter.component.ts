import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() price: number;
  @Output() myOnChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.myOnChange.emit({ value: this.price });
  }

}
