import { Component } from '@angular/core';
import { DiagnosisDescriptionGroupedUiModel } from '@models/mammaMRT/ui/diagnosis/diagnosis-description-grouped-ui.model';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-diagnose-article-list-dialog',
  templateUrl: './diagnose-article-list-dialog.component.html',
  styleUrls: ['./diagnose-article-list-dialog.component.scss']
})
export class DiagnoseArticleListDialogComponent extends ResizableBaseComponent {
  translationSubscriptions: Subscription[] = [];
  diagnosisList: DiagnosisDescriptionGroupedUiModel[];
  diffDiagnosisArticleListRrIds: string[];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public translate: TranslateService,
    private dialogService: DialogService
  ) {
    super();

    this.initTranslations();
  }

  openPdf(pdfFileReference: string) {
    this.ref.close('Yes');
    this.dialogService.open(InfoDialogComponent, {
      data: { pdfFileReference, pdfLandscape: false },
      showHeader: false,
      contentStyle: { padding: '0' },
      dismissableMask: true
    });
  }

  close() {
    this.ref.close('Yes');
  }

  initTranslations() {
    this.translate.stream('mammaMRT.diagnosis.differentialDiagnosisOptions').subscribe((out: DiagnosisDescriptionGroupedUiModel[]) => {
      this.diagnosisList = out;
    });
    this.translate.stream('mammaMRT.diagnosis.diffDiagnosisArticleListRrIds').subscribe((out: string[]) => {
      this.diffDiagnosisArticleListRrIds = out;
    });
  }
}
