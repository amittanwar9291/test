import { Pipe, PipeTransform } from '@angular/core';
import { IDeletable } from '@interfaces/deletable.interface';

@Pipe({
  name: 'displayActive',
  pure: false
})
export class DisplayActivePipe implements PipeTransform {
  transform(value: IDeletable[]): IDeletable[] {
    return value.filter(x => !x.isDeleted);
  }
}
