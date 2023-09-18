import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bulletList'
})
export class BulletListPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const items = value.split(',').map(item => item.trim());
    return items.map(item => `● ${item}`).join('\n');
  }
}