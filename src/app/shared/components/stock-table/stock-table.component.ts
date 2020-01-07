import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from 'src/app/models/stock';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit {

  @Input() stocks: Stock[] = [];
  @Output() stocksChange: EventEmitter<Stock[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove(idx: number) {
    this.stocks.splice(idx, 1);
    this.stocksChange.emit(this.stocks);
  }

}
