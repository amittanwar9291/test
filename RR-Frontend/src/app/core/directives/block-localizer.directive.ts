import { AfterContentChecked, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { Subscription } from 'rxjs';

import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

/**
 * Directive for blocking localizers from being editable,
 * but keeps possibility to navigate through page elements
 *
 * To make it work just add rrBlockLocalizer to localizer tag on Your page
 * @example
 * <rr-your-localizer rrBlockLocalizer></rr-your-localizer>
 *
 * or
 *
 * add rrBlockLocalizer directly in Your localizer, in svg tag
 * @example
 * <svg xmlns="http://www.w3.org/2000/svg" ... rrBlockLocalizer></svg>
 *
 * It will block each tspan, path, rect, ellipse, circle, text, p, g, ul tags in svg of Your localizer.
 *
 * There is a chance, that You want to keep one of element in Your localizer which is one of above tags clickable.
 * In such case, there are two ways:
 * 1. If You add rrBlockLocalizer directive to localizer tag,
 * element that You want to be clickable needs to have inline style:
 * @example
 * <circle style="pointer-events: all !important"></circle>
 *
 * 2. If You add rrBlockLocalizer directive to <svg> element in localizer,
 * element that You want to be clickable needs to have id, which is listed in excludedIds array:
 * * @example
 * <svg xmlns="http://www.w3.org/2000/svg" ... rrBlockLocalizer [excludedIds]=['closeCircle']>
 *   <circle id="closeCircle"></circle
 * </svg>
 * >
 *
 */

@Directive({
  selector: '[rrBlockLocalizer]'
})
export class BlockLocalizerDirective implements AfterContentChecked, OnInit, OnDestroy {
  @Input() excludedIds: string[] = [];
  userBasicDataSub: Subscription;
  shouldBeBlock: boolean;

  constructor(private element: ElementRef, private userBasicDataService: UserBasicDataService, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.userBasicDataSub = this.userBasicDataService.userData.subscribe(resp => {
      if (resp) {
        this.shouldBeBlock = resp.role === 'Viewer';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.userBasicDataSub) {
      this.userBasicDataSub.unsubscribe();
    }
  }

  ngAfterContentChecked(): void {
    if (this.shouldBeBlock) {
      this.blockPointerEvents(this.element.nativeElement);
    }
  }

  private blockPointerEvents(element: HTMLElement): void {
    if (!element.shadowRoot) {
      ['tspan', 'path', 'rect', 'ellipse', 'circle', 'text', 'p', 'g', 'ul'].forEach((tagName: string) => {
        const elementsColection = this.element.nativeElement.getElementsByTagName(tagName);
        for (const elem of elementsColection) {
          if (this.excludedIds.includes(elem.id) || this.hasNoBlockClass(elem)) {
            this.renderer2.setStyle(elem, 'pointerEvents', 'all');
          } else {
            this.renderer2.setStyle(elem, 'pointerEvents', 'none');
          }
        }
      });
    } else {
      const newStyleElement = document.createElement('style');
      newStyleElement.innerHTML = 'tspan, path, rect, ellipse, circle, text, p, g, ul { pointer-events: none !important; }';
      element.shadowRoot.appendChild(newStyleElement);
    }
  }

  private hasNoBlockClass(elem: HTMLElement): boolean {
    return elem.classList.value.includes('no-block');
  }
}
