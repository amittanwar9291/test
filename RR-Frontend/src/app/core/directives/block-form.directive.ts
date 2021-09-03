import { AfterContentChecked, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { Subscription } from 'rxjs';

import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

/**
 * Directive for blocking form (or other element playing that role) from being editable,
 * but keeps possibility to navigate through page elements.
 *
 * Directive checks if form should be block by itself. Form will be block only if logged user role is viewer.
 *
 *
 * HOW TO BLOCK WHOLE PAGE
 * To make it work just add rrBlockForm to form tag on Your page
 * @example
 * <form #autosaveForm="ngForm" [hidden]="!modelInitialized" rrBlockForm></form>
 *
 * By default (so without any additional work) it will block each p-checkbox, p-radioButton, p-dropdown, button and input
 *
 *
 * HOW TO EXCLUDE FROM BLOCKING
 * You may exclude elements from being blocked by setting [excludedIds]="['excludedElementId']" to form tag
 * @example
 * <form #autosaveForm="ngForm" [hidden]="!modelInitialized" rrBlockForm [excludedIds]="['radio1']">
 *  <p-radioButton id="radio1" name="radio1" [(ngModel)]="model.radioValue1"></p-radioButton>
 *  <p-radioButton name="radio2" [(ngModel)]="model.radioValue2"></p-radioButton>
 * </form>
 *
 * You may also exclude specific element by setting class 'no-block-click'
 * @example
 * <form #autosaveForm="ngForm" [hidden]="!modelInitialized" rrBlockForm>
 *  <p-radioButton name="radio1" [(ngModel)]="model.radioValue1"></p-radioButton>
 *  <p-radioButton name="radio2" [(ngModel)]="model.radioValue2" class="no-block-click"></p-radioButton>
 * </form>
 *
 *
 * HOW TO BLOCK ONLY SELECTED ELEMENT
 * You may also choose only specific element that isn't p-checkbox, p-radioButton, p-dropdown, button or input
 * and block it by applying its class 'block-click'
 * (parent element should has rrBlockForm applied)
 * @example
 * <form #autosaveForm="ngForm" [hidden]="!modelInitialized" rrBlockForm>
 *  <p-radioButton class="block-click" name="radio1" [(ngModel)]="model.radioValue1"></p-radioButton>
 *  <p-radioButton name="radio2" [(ngModel)]="model.radioValue2"></p-radioButton>
 * </form>
 *
 *
 * !!!!! LOCALIZERS !!!!!!
 * Since with basic blocking functionality we iterate over predefined html tag,
 * to block localizers (which always have unique custom tag)
 * we have to use rrBlockLocalizer directive to block them
 *
 *
 * STRAIGHTFORWARD IMPLEMENTATION
 * 1. Put rrBlockForm in form tag on Your page.
 * 2. If You have any localizers, use rrBlockLocalizer directive to block them (if the localizer wasn't already blocked by itself).
 *
 */

@Directive({
  selector: '[rrBlockForm]'
})
export class BlockFormDirective implements OnInit, OnDestroy, AfterContentChecked {
  @Input() excludedIds: string[] = [];
  readonly elementsToBlock = ['p-checkbox', 'p-radioButton', 'p-dropdown', 'button', 'input'];
  userBasicDataSub: Subscription;
  shouldBeBlock: boolean;

  constructor(private element: ElementRef, private renderer2: Renderer2, private userBasicDataService: UserBasicDataService) {}

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
      this.elementsToBlock.forEach((tagName: string) => {
        this.blockPointerEvents(this.element.nativeElement.getElementsByTagName(tagName));
      });
      this.blockPointerEvents(this.element.nativeElement.getElementsByClassName('block-click'));
      this.stopEvents(this.element.nativeElement);
    }
  }

  private blockPointerEvents(elements) {
    for (const element of elements) {
      const elem: HTMLElement = element;
      if (!this.excludedIds.includes(elem.id) && !this.alreadyBlocked(elem)) {
        this.renderer2.setStyle(elem, 'pointerEvents', 'none');
        this.stopEvents(elem, true);
        if (elem.hasAttribute('rrinfoicon')) {
          setTimeout(() => {
            const input = elem.getElementsByTagName('input')[0];
            const icon = elem.getElementsByTagName('img')[0];
            this.renderer2.setStyle(icon, 'pointerEvents', input.hasAttribute('disabled') ? 'none' : 'all');
          });
        }
      }
      if (elem.className.includes('no-block-click')) {
        this.renderer2.setStyle(elem, 'pointerEvents', 'all');
      }
    }
  }

  private alreadyBlocked(elem: HTMLElement): boolean {
    return elem.style.pointerEvents === 'none';
  }

  private stopEvents(element: HTMLElement, click?: boolean) {
    element.addEventListener(
      'focus',
      e => {
        e.preventDefault();
        e.stopImmediatePropagation();
      },
      true
    );
    element.addEventListener(
      'keydown',
      e => {
        e.preventDefault();
        e.stopImmediatePropagation();
      },
      true
    );
    element.addEventListener(
      'keypress',
      e => {
        e.preventDefault();
        e.stopImmediatePropagation();
      },
      true
    );
  }
}
