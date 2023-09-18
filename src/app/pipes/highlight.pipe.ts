import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text?: null | string, search?: null | string): any {
    if (search && text && typeof search === 'string') {
      let pattern = search.replace(
        /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
        '\\$&'
      );
      pattern = pattern
        .split(' ')
        .filter((t) => {
          return t.length > 0;
        })
        .join('|');
      const regex = new RegExp(pattern, 'gi');
      const highlighted = text.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );
      return this.sanitizer.bypassSecurityTrustHtml(highlighted);
    } else {
      return text;
    }
  }
}