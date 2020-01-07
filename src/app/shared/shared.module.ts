import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CoreModule,
    ComponentsModule
  ]
})
export class SharedModule { }
