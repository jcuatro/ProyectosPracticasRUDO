import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], text:string):any{
    return text != "" && text != undefined ? list.filter(
    res => res.name.toLowerCase().includes(text.toLowerCase())): list;
  }
}