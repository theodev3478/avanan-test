import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { map } from 'rxjs/operators';
import { Stock } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private bs: BackendService
  ) { }

  search(symbols: string) {
    return this.bs.get('https://api.iextrading.com/1.0/tops/last', { params: { symbols } })
      .pipe(map(res => res.map(s => new Stock(s))));
  }

}
