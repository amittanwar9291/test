import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { TrackingService } from '@services/shared/tracking/tracking.service';
import { LoggingService } from '@services/shared/logging/logging.service';
import { TrackingSubjectType } from '@enums/shared/tracking-subject-type.enum';
import { TrackingEventType } from '@enums/shared/tracking-event-type.enum';
import { InfoDialogService } from '@services/shared/info-pdf/info-dialog.service';
import { AppConfig } from '../../../app.config';
import { IPdfDownloadData } from '@interfaces/pdf-download-data.interface';
import { environment } from '@environments/environment';

/**
 * Dialog (modal) that displays pdf
 * Works with InfoIconComponent
 */

@Component({
  selector: 'rr-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent extends ResizableBaseComponent implements OnInit, OnDestroy {
  /**
   * url for pdf-viewer
   */
  pdfSRC: string;

  /**
   * represents zoom level
   */
  zoomPdf = 1;

  /**
   * sets dialog width
   */
  pdfLandscape: boolean;

  /**
   * sets visibility of dialog AFTER downloading pdf file
   */
  isVisible: boolean;

  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public trackingService: TrackingService,
    public logger: LoggingService,
    private infoPdfService: InfoDialogService
  ) {
    super();
    // adding custom class to body to style dialog overlay
    document.body.classList.add('ui_widget_custom_overlay');
    this.isVisible = false;
  }

  ngOnInit() {
    super.ngOnInit();
    this.pdfLandscape = this.config.data.pdfLandscape;
    this.sendTrackingEvent(TrackingEventType.Start);
    this.infoPdfService.getPdf(this.config.data.pdfFileReference).subscribe(
      (resp: IPdfDownloadData) => {
        this.pdfSRC = AppConfig.settings.baseUrl + resp.downloadUrl;
        // notification is pdf file name when non is found in language of app
        this.pdfLandscape = this.pdfLandscape && !resp.downloadUrl.includes('notification');
      },
      () => null,
      () => {
        this.isVisible = true;
      }
    );
  }

  ngOnDestroy(): void {
    // removing custom class
    document.body.classList.remove('ui_widget_custom_overlay');
    this.sendTrackingEvent(TrackingEventType.Stop);
  }

  private sendTrackingEvent(eventType: TrackingEventType): void {
    if (this.config.data && this.config.data.pdfFileReference) {
      this.trackingService.sendTrackingEvent(eventType, TrackingSubjectType.InfoDialog, this.config.data.pdfFileReference.toString());
    } else {
      this.logger.warn('TRACKING', 'Tracking event type ' + eventType.toString() + ' sent without pdf file reference');
    }
  }

  /**
   * close modal
   */
  close() {
    this.dialogService.dialogComponentRef.instance.close();
  }

  /**
   * zoom in pdf
   */
  zoomIn() {
    this.zoomPdf++;
  }

  /**
   * zoom out pdf
   */
  zoomOut() {
    if (this.zoomPdf > 1) {
      this.zoomPdf--;
    }
  }

  /**
   * print pdf
   */
  print() {
    // todo fix on electron - functionality not active due to electron printing not set
    const iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.src = this.pdfSRC;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
}
