import { AfterViewChecked, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2 } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { mapKeys, trimEnd } from 'lodash';

import { InfoDialogComponent } from '../../shared/dialogs/info-dialog/info-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

/**
 * if you are going to modify this directive, please check if it works with usecases:
 * 1. Breaking lines with </br> or \n and Natural breaking words depending on length - correct behavior.
 * Icon always placed in the end of text, no matter how many breaks there are and how are they shaped.
 * If one-line-text icon as superscript, if in breaked line incon inline with text
 *
 * 2. check if info buttons shows pdf in viewer mode
 * 3. check if info buttons appears on every element like h1, h2, radiobuttons, checkboxes, rr-info-button etc.
 * 4. check if info button appears on i know i describe components -> mammaMRT page 6, first finding
 * 5. check if info button placement is correct (as GR says) when switching languages (test cardioMRT page 5 tab2)
 */

/**
 * Directive for setting info-icon to selected element.
 * Tested for: h1-h5, p, p-radiobutton, p-checkbox, rr-number-input
 * In case of p-radiobutton, p-checkbox and rr-number-input info-icon is placed in label tag of these elements.
 *
 * Usage:
 *
 * 1.Set it to element and pass info-icon rr-id as input.
 * @example
 * <p rrInfoIcon="kne_m_040212">{{'some.text | translate}}</p>
 * <p-radiobutton rrInfoIcon="kne_m_040212"></p-radiobutton>
 *
 * If pdf in modal should be display in landscape mode, set infoIconPdfLandscape to true:
 * @example
 * <p rrInfoIcon="kne_m_040212" infoIconPdfLandscape="true">{{'some.text | translate}}</p>
 *
 * If You want to set Your own styles or overwrite existing info-icon styles,
 * set infoIconStyles by passing css properties and their values in object:
 * @example
 * <p rrInfoIcon="kne_m_040212" infoIconStyles="{'margin-top': '5px'}">{{'some.text | translate}}</p>
 *
 * 2. Put You pdf file into assets/info-img directory
 * 3. Update FileMapper with rr-id You set in icon and file name
 * @example
 * export const FileMapper = {
 * kne_m_040212: 'kne_m_040212_info_de',
 * }
 */
@Directive({
  selector: '[rrInfoIcon]',
  providers: [DialogService]
})
export class InfoIconDirective implements AfterViewChecked, OnDestroy, OnChanges {
  @Input() rrInfoIcon: string;

  /**
   * if not set or set to false pdf in modal is display in portrait mode
   */
  @Input() infoIconPdfLandscape: boolean;

  /**
   * if not set icon gets width: 20px; cursor: pointer; margin-left: 4px; margin-top: -20px;
   */
  @Input() infoIconStyles: any;

  translateSubscription: Subscription;
  oneExecutionFlag = true;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
    private dialogService: DialogService,
    private translate: TranslateService
  ) {
    this.translateSubscription = translate.onLangChange.subscribe(() => {
      setTimeout(() => {
        if (this.getIconElement()) {
          this.setIconStyles(this.getIconElement());
        }
      });
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  ngOnChanges() {
    setTimeout(() => {
      if (this.getIconElement()) {
        this.setIconStyles(this.getIconElement());
      }
    });
  }

  ngAfterViewChecked(): void {
    if (!this.oneExecutionFlag) {
      return;
    }
    this.initInfoIcon();
  }

  initInfoIcon(): void {
    let results: HTMLCollection = null;
    let element: Element = null;

    if (this.isRadioOrCheckbox() || this.isRadioRrNumberInput()) {
      results = this.element.nativeElement.getElementsByTagName('label');
    } else {
      element = this.element.nativeElement;
    }

    if (results?.length > 0) {
      for (const item of Array.from(results)) {
        const icon = this.prepareIcon();
        this.renderer2.appendChild(item, icon);
      }
      this.oneExecutionFlag = false;
    } else if (element) {
      const icon = this.prepareIcon();
      this.renderer2.appendChild(element, icon);
      this.oneExecutionFlag = false;
    }
  }

  /**
   * getting parent node (label for p-radiobutton, p-checkbox and rr-number-input)
   */
  private getIconParentNode(): HTMLElement {
    if (this.isRadioOrCheckbox()) {
      return this.element.nativeElement.lastElementChild;
    } else if (this.isRadioRrNumberInput()) {
      return this.element.nativeElement.lastElementChild.lastElementChild;
    } else {
      return this.element.nativeElement;
    }
  }

  /**
   * preparing icon:
   * creating tag;
   * setting its src and rr-id attributes;
   * setting default or custom styles;
   * setting on click listener with callback to open pdf modal
   */
  private prepareIcon() {
    const icon: HTMLElement = this.renderer2.createElement('img');
    this.renderer2.setAttribute(icon, 'src', 'assets/img/shared/rr-info-icon.svg');
    this.renderer2.setAttribute(icon, 'rr-id', this.rrInfoIcon);
    this.renderer2.setStyle(icon, 'width', 'auto');
    this.renderer2.setStyle(icon, 'cursor', 'pointer');
    this.renderer2.setStyle(icon, 'margin-left', '4px');

    setTimeout(() => {
      this.setIconStyles(icon);
    });

    this.renderer2.listen(icon, 'click', (event: Event) => {
      this.dialogService.open(InfoDialogComponent, {
        data: { pdfFileReference: this.rrInfoIcon, pdfLandscape: this.infoIconPdfLandscape },
        showHeader: false,
        contentStyle: { padding: '0' },
        dismissableMask: true
      });
      event.stopPropagation();
    });
    return icon;
  }

  private setIconStyles(icon: Element) {
    // detect if text has more then one line and set right positioning styles to icon
    const parentHeight = this.getIconParentNode().clientHeight;
    const parentFontSize = window.getComputedStyle(this.getIconParentNode(), null).getPropertyValue('font-size');
    const parentFontSizeAsNumber = Number(trimEnd(parentFontSize, 'px'));
    const isNotOneLineElement = parentHeight / parentFontSizeAsNumber >= 2 || this.getIconParentNode().innerText.includes('\n');
    this.renderer2.setStyle(icon, 'margin-top', isNotOneLineElement ? '-4px' : '-20px');

    // set users custom styles
    if (this.infoIconStyles) {
      mapKeys(this.infoIconStyles, (value, key) => {
        this.renderer2.setStyle(icon, key, value);
      });
    }
  }

  private getIconElement(): Element {
    const lastChild = this.getIconParentNode().children[0];
    return lastChild.nodeName === 'IMG' ? lastChild : null;
  }

  private isRadioOrCheckbox(): boolean {
    return this.element.nativeElement.localName === 'p-radiobutton' || this.element.nativeElement.localName === 'p-checkbox';
  }

  private isRadioRrNumberInput(): boolean {
    return this.element.nativeElement.localName === 'rr-number-input';
  }
}
