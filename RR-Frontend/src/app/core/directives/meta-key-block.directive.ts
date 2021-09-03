import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[rrMetaKeyBlock]'
})
export class MetaKeyBlockDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    /**
     * This prevents the p-dropdown from accidental selection of some options when pressing the Windows key (Cmd key on Mac).
     * It is a primeng's p-dropdown bug (checked on version 11.3.0) and this is a temporary solution until primeng team fixes it.
     * More details in the issue reported to the primeng https://github.com/primefaces/primeng/issues/10113
     */
    const el = this.elementRef.nativeElement.querySelector('.ui-helper-hidden-accessible');
    el.addEventListener(
      'keydown',
      (event: KeyboardEvent) => {
        if (event.metaKey) {
          event.stopPropagation();
        }
      },
      { capture: true }
    );
  }
}
