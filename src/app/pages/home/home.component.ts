import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from 'src/app/services';
import { Stock } from 'src/app/models';
import { LocalStorage, StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  stocks: Stock[] = [];

  constructor(
    private fb: FormBuilder,
    private ss: StockService,
    private ls: StorageMap
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  onSearch(event: Event) {
    event.preventDefault();

    this.ss.search(this.form.value.stock).subscribe(res => {
      this.stocks = this.stocks.concat(res);
      this.ls.set('stocks', res).subscribe();
    });
  }

  onStocksChange(stocks: Stock[]) {
    this.stocks = stocks;
    this.ls.set('stocks', this.stocks).subscribe();
  }

  private buildForm() {
    this.form = this.fb.group({
      stock: [null, Validators.required]
    });

    this.ls.get('stocks').subscribe((res: any) => {
      if (res) {
        this.stocks = res.map(s => new Stock(s));
      }
    });
  }

}
