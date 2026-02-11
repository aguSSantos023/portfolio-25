// src/app/pipes/highlight.pipe.ts
import { inject, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  private readonly sanitizer = inject(DomSanitizer);

  // Define the Tailwind class to apply
  private readonly TAILWIND_CLASS = 'font-bold text-primary-c';
  private readonly PATTERN = /-\{(.*?)\}-/g; // Regular expression for -{ content }-



  transform(value: string | undefined | null): SafeHtml {
    if (!value) return '';


    // Replace pattern
    const replacedHtml = value.replace(this.PATTERN, (match, content) => {
      return `<span class="${this.TAILWIND_CLASS}">${content.trim()}</span>`;
    });

    // Mark the resulting HTML as safe using the injected 'sanitizer'
    return this.sanitizer.bypassSecurityTrustHtml(replacedHtml);
  }
}
