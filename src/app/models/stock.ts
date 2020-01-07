export class Stock {
  symbol: string;
  price: number;
  size: number;
  time: Date;

  constructor(data: any = {}) {
    this.symbol = data.symbol;
    this.price = +data.price;
    this.size = +data.size;
    this.time = new Date(data.time);
  }
}
