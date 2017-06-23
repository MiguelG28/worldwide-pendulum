import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gravity'
})
export class GravityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toFixed(13);
  }

}
