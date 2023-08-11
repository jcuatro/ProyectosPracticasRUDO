import { FilterPipe } from './filter.pipe';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypePipe } from './type.pipe';



@NgModule({
  declarations: [FilterPipe, FilterPipe, TypePipe],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe
  ]
})
export class PipesModule { }