import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  transform(list: any[], text:string):any{
    return text != "" && text != undefined ? list.filter(
    res => res.data.types.type.name.toLowerCase().includes(text.toLowerCase())): list;
  }
}
