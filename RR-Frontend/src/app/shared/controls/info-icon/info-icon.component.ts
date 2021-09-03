import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';

import { DiagnoseArticleListDialogComponent } from 'app/shared/dialogs/diagnose-article-list-dialog/diagnose-article-list-dialog.component';

/**
 * InfoIconComponent sets icon which call modal for displaying information pdfs and comes together with InfoDialogComponent.
 * Usage:
 * 1. Place component in You template and set it valid rr-id witch become the reference for file that will be display in modal.
 *
 * @example
 * <rr-info-icon rr-id="kne_m_040212"></rr-info-icon>
 *
 * 2. Put You pdf file into assets/info-img directory
 * 3. Update FileMapper with rr-id You set in icon and file name
 * @example
 * export const FileMapper = {
 * kne_m_040212: 'kne_m_040212_info_de',
 * }
 * 4. Styling.
 * InfoIconComponent is prepared to use with h1, h2, p-checkbox and p-radioButton.
 *
 * For h1 and h2 icon should be put inside tag and no additional actions or styling are required.
 *
 * For p-checkbox and p-radioButton should be put after these tags.
 * You may style it on Your own or use styling provided by InfoIconComponent.
 * In that case You need to wrap checkbox or radio and rr-info-icon with <span> and set applyStyle for rr-info-icon to true
 * @example
 * <span>
 *  <p-checkbox></p-checkbox>
 *  <rr-info-icon rr-id="kne_m_060303" [applyStyle]="true"></rr-info-icon>
 * <span>
 *
 * 5. You may define if pdf should be display as landscape. Default option is portrait mode.
 * @example
 *  <rr-info-icon rr-id="kne_m_060303" [pdfLandscape]="true"></rr-info-icon>
 *
 */

@Component({
  selector: 'rr-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss'],
  providers: [DialogService]
})
export class InfoIconComponent implements AfterViewInit {
  /**
   * if not set or set to false no styling is apply for icon, its parent or sibling
   */
  @Input() applyIconStyle: boolean;

  /**
   * defines if pdf should be display in landscape mode (modal is wider); default is portrait mode
   */
  @Input() pdfLandscape: boolean;

  /**
   * If true, article list dialog is attached instead of pdf
   */
  @Input() isDiffDiagnosisArticleListAttached: boolean;

  /**
   * reference to file witch is pass to modal
   */
  pdfFileReference: string;

  constructor(private dialogService: DialogService, private elementRef: ElementRef) {}

  /**
   * setting up reference to pdf file and applying styles for icon (if applyStyle is set to true)
   */
  ngAfterViewInit() {
    this.pdfFileReference = this.getPdfReference();
    if (this.applyIconStyle || this.isDiffDiagnosisArticleListAttached) {
      this.setStyles();
    }
  }

  /**
   * getting value of rr-id from attributes of rr-info-icon and returning it
   * console error if no rr-id is set for rr-info-icon
   */
  private getPdfReference(): string {
    const reference = this.elementRef.nativeElement.attributes.getNamedItem('rr-id');
    if (!reference || reference.value.length === 0) {
      console.error('No rr-id set for info icon - no reference to file');
    } else {
      return reference.value;
    }
  }

  /**
   * setting styles for rr-info-icon parent (<span>) and sibling if it's p-checkbox or p-radioButton
   */
  private setStyles(): void {
    const sibling = this.elementRef.nativeElement.previousElementSibling;
    if (
      sibling &&
      (sibling.localName === 'p-checkbox' || sibling.localName === 'p-radiobutton' || this.isDiffDiagnosisArticleListAttached)
    ) {
      this.elementRef.nativeElement.parentElement.style.display = 'flex';
      this.elementRef.nativeElement.style.marginTop = '-7px';
      this.elementRef.nativeElement.style.marginLeft = '6px';
    }
  }

  /**
   * call InfoDialogComponent with passing it pdfFileReference in data
   */
  click(): void {
    if (this.isDiffDiagnosisArticleListAttached) {
      this.dialogService.open(DiagnoseArticleListDialogComponent, {
        showHeader: false
      });
      return;
    }
    this.dialogService.open(InfoDialogComponent, {
      data: { pdfFileReference: this.pdfFileReference, pdfLandscape: this.pdfLandscape },
      showHeader: false,
      contentStyle: { padding: '0' },
      dismissableMask: true
    });
  }
}
