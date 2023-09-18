import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // Verifica si el valor es nulo o indefinido

    // Divide el texto en palabras y capitaliza la primera letra de cada palabra
    return value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}