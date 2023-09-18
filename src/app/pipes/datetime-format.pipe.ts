import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    return formatDate(date, 'dd/MM/yyyy hh:mm:ss a', 'en-US');
  }
}