import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experiencia'
})
export class ExperienciaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
