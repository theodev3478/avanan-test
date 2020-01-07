import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockTableComponent } from './stock-table/stock-table.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    StockTableComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    StockTableComponent
  ]
})
export class ComponentsModule { }
