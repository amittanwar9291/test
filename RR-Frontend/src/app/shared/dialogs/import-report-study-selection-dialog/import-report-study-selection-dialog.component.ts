import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { IDicomStudyData } from '@interfaces/dicom-study-data.interface';
import { TranslateService } from '@ngx-translate/core';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'rr-import-report-study-selection-dialog',
  templateUrl: './import-report-study-selection-dialog.component.html',
  styleUrls: ['./import-report-study-selection-dialog.component.scss']
})
export class ImportReportStudySelectionDialogComponent extends ResizableBaseComponent implements OnInit {
  private isConfirmed: boolean;

  studies: IDicomStudyData[];
  selectedStudy: IDicomStudyData;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private translate: TranslateService,
    private ipcMessageService: IpcMessageService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    const dateFormat = this.translate.instant('shared.dateFormat');
    this.studies = this.config.data;
    this.studies.sort((first, second) => second.studyDate?.getTime() - first.studyDate?.getTime());
    this.studies.forEach(study => (study.label = this.getStudyLabel(study, dateFormat)));
    this.ref.onDestroy.subscribe(_ => this.ipcMessageService.sendStudySelection(!this.isConfirmed, this.selectedStudy));
  }

  confirm(): void {
    this.isConfirmed = true;
    this.ref.close();
  }

  cancel(): void {
    this.ref.close();
  }

  private getStudyLabel(data: IDicomStudyData, dateFormat: string): string {
    let result;
    const studyDate = data.studyDate ? formatDate(data.studyDate, dateFormat, this.locale) : '';
    if (data.accessionNumber) {
      result = data.accessionNumber;
    }

    if (data.accessionNumber && data.studyInstanceUid) {
      result += ` / ${data.studyInstanceUid}`;
    } else {
      result = data.studyInstanceUid;
    }

    if (data.studyDescription) {
      result += ` / ${data.studyDescription}`;
    }

    if (studyDate) {
      result += ` / ${studyDate}`;
    }

    return result;
  }
}
