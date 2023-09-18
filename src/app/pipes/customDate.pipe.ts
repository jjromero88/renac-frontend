import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }

    const dateParts = value.split('T')[0].split('-');
    if (dateParts.length !== 3) {
      return value;
    }

    const [year, month, day] = dateParts;
    return `${day}/${month}/${year}`;
  }
}