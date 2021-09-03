import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rrInputSpecialCharactersRestricted]'
})
export class InputSpecialCharactersRestrictedDirective {
  @Input() set rrInputSpecialCharactersRestricted(val) {
    this.restrictedCharacters = val || '<>:"/\\|?*';
  }

  @Input() set maxlength(val) {
    this.regexLength = val ? `{1,${val}}` : '*';
  }

  private restrictedCharacters: string;
  private regexLength: string;

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    if ([...this.restrictedCharacters].includes(event.key)) {
      event.preventDefault();
    }
  }

  private get charactersWithoutBackslash(): string {
    return [...this.restrictedCharacters].filter((char: string): boolean => char !== '\\').join('');
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    const pasteData = event.clipboardData.getData('text/plain');
    const regex = this.restrictedCharacters.includes('\\')
      ? new RegExp(`^[^\\\\${this.charactersWithoutBackslash}]${this.regexLength || '*'}$`, 'g')
      : new RegExp(`^[^${this.restrictedCharacters}]${this.regexLength || '*'}$`, 'g');

    if (pasteData && !pasteData.match(regex)) {
      event.preventDefault();
    }
  }
}
