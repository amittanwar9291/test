import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Renderer2, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { EMPTY, forkJoin, fromEvent, Observable, Subscription } from 'rxjs';
import { auditTime, distinctUntilChanged, exhaustMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TextReportUiModel } from '@models/shared/report/text-report-ui';
import { ReportUiModel } from '@models/shared/report';
import { PatientUiModel } from '@models/shared/patient/patient-ui.model';
import { LanguagesTypes } from '@models/shared/report/report-languages-types';

import { NavigationService } from '@services/shared/navigation/navigation.service';
import { TextReportService } from '@services/shared/report/text-report.service';
import { HtmlReportHelper } from '@services/shared/report/html-report-helper.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { CustomTranslateService } from '@services/shared';

import { ExportDialogComponent } from '../../../shared/dialogs/export-dialog/export-dialog.component';
import { DisclaimerDialogComponent } from '../../../shared/dialogs/disclaimer-dialog/disclaimer-dialog.component';

import { AppConfig } from '../../../app.config';
import { PatientDataService } from '@services/shared/patient-data/patient-data.service';
import { ReportPageViewModel } from '@models/shared/report/report-page-view.model';
import { ReportGetParams } from '@models/shared/report/report-get-params';
import { ReportTypes } from '@models/shared/report/report-types';
import { UserHttpService } from '@services/shared/user/user-http.service';
import { ICustomReportConfig } from '@interfaces/configs/custom-report-config.interface';
import { ReportSummaryApiModel } from '@models/shared/report/summary/report-summary-api.model';
import { ReportSummaryEditComponent } from '../../../shared/dialogs/report-summary-edit/report-summary-edit.component';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';

@Component({
  selector: 'rr-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('discussionDoctor') discussionDoctorElem: ElementRef;
  @ViewChild('discussionPatient') discussionPatientElem: ElementRef;
  @ViewChild('reportContentDoctor') reportContentDoctor: ElementRef;
  @ViewChild('reportContentPatient') reportContentPatient: ElementRef;

  readonly reportTypes = ReportTypes;
  customReportTypes: ICustomReportConfig[] = [];
  readonly languagesTypes = LanguagesTypes;

  reportType = this.reportTypes.doctor;
  customReportType: ICustomReportConfig;
  report: ReportUiModel;
  patientData: PatientUiModel;
  textReport: TextReportUiModel;
  languages: DropdownModel[];
  subscriptions: Subscription[] = [];
  discussionSubscription: Subscription;
  viewModel: ReportPageViewModel = new ReportPageViewModel();

  isUserViewer = true;

  constructor(
    private renderer2: Renderer2,
    public translate: TranslateService,
    public customTranslate: CustomTranslateService,
    private textReportService: TextReportService,
    private htmlReportHelper: HtmlReportHelper,
    private navService: NavigationService,
    private patientDataService: PatientDataService,
    public dialogService: DialogService,
    private userBasicDataService: UserBasicDataService,
    private userService: UserHttpService,
    private router: Router,
    private navigationDataService: AbstractNavigationReportDataService
  ) {
    this.htmlReportHelper.renderer2 = this.renderer2;
  }

  ngOnInit() {
    this.initData();
    this.initTranslations();
    this.initSubscriptions();
    this.initReportSettings();
  }

  private initData() {
    this.report = this.navService.getReportData();
    // If list will contain more than 15 elements it leads to overflow and scrolling is disabled. In this case redesign of list behavior must be done.
    // Current requirements tell that the list will only contain less than 10 elements so no modification were needed
    this.customReportTypes = AppConfig.customReports.find(cr => cr.module === this.report.examinationType)?.reports ?? [];
  }

  private async initReportSettings() {
    const params: ReportGetParams = this.textReportService.prepareResultReportParams(this.report, this.reportType);
    const userBasic = this.userBasicDataService.userData.value;

    if (userBasic.role !== 'Viewer') {
      this.isUserViewer = false;
    }

    forkJoin({
      textReport: this.textReportService.getTextReport(params, false),
      user: this.userService.getUserById(userBasic.userId)
    }).subscribe(({ textReport, user }) => {
      this.textReport = textReport
        ? textReport
        : this.textReportService.createNewReportResult(this.report.id, this.isReportType(this.reportTypes.doctor));
      this.viewModel.restoreFlagsFromTextReport(this.textReport, user);
      this.getReportText();
    });
  }

  private initSubscriptions() {
    this.subscriptions.push(
      this.patientDataService.getPatientStream().subscribe(patientData => {
        this.patientData = patientData;
      }),
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.updateTextReport().toPromise();
        }
      })
    );
  }

  private initTranslations() {
    this.subscriptions.push(
      this.customTranslate.language.subscribe(lan => {
        this.translate.use(lan);
      }),
      this.translate.stream('report.languages').subscribe((out: DropdownModel[]) => {
        this.languages = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngAfterViewChecked(): void {
    if (this.textReport?.discussion && !this.discussionSubscription) {
      this.setDiscussionUpdateSubscription();
    }
  }

  private getReportText() {
    const params: ReportGetParams = this.textReportService.prepareFullReportParams(
      this.report,
      this.viewModel,
      this.reportType,
      this.isReportType(this.reportTypes.doctor),
      this.getSelectedLanguageCode()
    );

    return this.textReportService.getTextReport(params, true).subscribe(async textReport => {
      this.textReport = textReport;
      this.viewModel.setDiscussion(this.textReport.discussion);
      this.viewModel.isApproved = await this.checkReportApproval();
      this.setReport(this.getReportContainer(), this.textReport.reportHtml);
    });
  }

  private async checkReportApproval(): Promise<boolean> {
    return this.textReport.approved ? this.textReport.approved.includes(this.getSelectedLanguage()) : false;
  }

  setReport(reportContainer: ElementRef, reportHtml) {
    const elements = this.htmlReportHelper.parseHtmlReport(reportHtml);
    this.htmlReportHelper.clearReportContainer(reportContainer);

    elements.forEach((e: HTMLOrSVGImageElement) => {
      if (e.tagName === 'DIV' || e.tagName === 'SPAN') {
        this.renderer2.listen(e, 'click', event => this.goToPageToEdit(event));
        this.renderer2.appendChild(reportContainer.nativeElement, e);
      }
    });
    setTimeout(() => (this.viewModel.isEdit ? this.addSummaryEditButton() : this.removeSummaryEditButton()));
  }

  private goToPageToEdit(event) {
    if (this.viewModel.isEdit && event.target.attributes.page) {
      const pageNumber = Number(event.target.attributes.page.value);
      this.navService.navigate(this.report.id, this.report.examinationType, pageNumber);
    }
  }

  copyToClipboard() {
    const typeName = this.isReportType(this.reportTypes.doctor) ? 'doctor' : 'patient';
    this.textReportService.copyToClipboard(typeName, this.report, this.viewModel, this.reportType, this.getSelectedLanguageCode());
  }

  updateTextReportFields() {
    this.textReport.discussion = this.viewModel.discussion;
    this.textReport.isLocalizer = this.viewModel.isLocalizer;
    this.textReport.isReferenceImage = this.viewModel.isReferenceImage;
    this.textReport.isICD10 = this.viewModel.isICD10;
  }

  updateTextReport(): Observable<TextReportUiModel> {
    if (!this.isUserViewer) {
      this.updateTextReportFields();
      return this.textReportService.updateTextReport(this.textReport, false);
    }
    return EMPTY;
  }

  updateAndReloadTextReport() {
    this.updateTextReportFields();
    if (this.isUserViewer) {
      this.getReportText();
    } else {
      this.textReportService.updateTextReport(this.textReport, false).subscribe(() => {
        this.getReportText();
      });
    }
  }

  checkDiscussion() {
    if (this.viewModel.isDiscussion) {
      this.setDiscussionUpdateSubscription();
    } else {
      if (!this.isUserViewer) {
        this.textReport.discussion = this.viewModel.discussion = '';
        if (this.discussionSubscription) {
          this.discussionSubscription.unsubscribe();
        }
        this.updateTextReport().toPromise();
      }
    }
  }

  private setDiscussionUpdateSubscription() {
    this.setDiscussionUpdateSubscriptionOnElement(this.discussionDoctorElem);
    this.setDiscussionUpdateSubscriptionOnElement(this.discussionPatientElem);
  }

  private setDiscussionUpdateSubscriptionOnElement(element: ElementRef) {
    if (element && !this.discussionSubscription && !this.isUserViewer) {
      this.discussionSubscription = fromEvent(element.nativeElement, 'input')
        .pipe(
          auditTime(AppConfig.settings.autosaveTime),
          distinctUntilChanged(),
          exhaustMap(() => this.updateTextReport())
        )
        .subscribe();
    }
  }

  edit() {
    this.viewModel.isEdit = !this.viewModel.isEdit;
    this.viewModel.isEdit ? this.addSummaryEditButton() : this.removeSummaryEditButton();
  }

  export() {
    this.dialogService.open(ExportDialogComponent, {
      data: {
        languages: this.languages,
        selectedLang: this.getSelectedLanguage(),
        reportLabel: this.getTitleLabel()
      },
      showHeader: false
    });
  }

  approve() {
    this.dialogService
      .open(DisclaimerDialogComponent, {
        data: {
          languages: this.languages,
          selectedLang: this.getSelectedLanguage(),
          reportLabel: this.getTitleLabel()
        },
        showHeader: false
      })
      .onClose.subscribe(async (out: any) => {
        if (out) {
          this.approveReportForLanguage(out);
        }
      });
  }

  private async approveReportForLanguage(language: string) {
    if (!this.textReport.approved) {
      this.textReport.approved = language;
    } else if (!this.textReport.approved.includes(language)) {
      this.textReport.approved += `,${language}`;
    }
    this.updateTextReportFields();
    this.textReportService.updateTextReport(this.textReport, true).subscribe(() => {
      this.getReportText();
      this.navigationDataService.refreshReport();
    });
  }

  setReportType(type: string) {
    if (this.reportType !== type) {
      this.htmlReportHelper.clearReportContainer(this.getReportContainer());

      this.reportType = type;
      this.customReportType = this.customReportTypes.find(cr => cr.reportTypeName === type);
      this.viewModel.clear();
      this.textReport = null;

      if (this.discussionSubscription) {
        this.discussionSubscription.unsubscribe();
        this.discussionSubscription = null;
      }

      const params: ReportGetParams = this.textReportService.prepareResultReportParams(this.report, this.reportType);
      this.textReportService.getTextReport(params, false).subscribe(textReport => {
        this.textReport = textReport
          ? textReport
          : this.textReportService.createNewReportResult(this.report.id, this.isReportType(this.reportTypes.doctor));
        this.viewModel.restoreFlagsFromTextReport(this.textReport);
        this.getReportText();
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
    if (this.discussionSubscription) {
      this.discussionSubscription.unsubscribe();
    }
  }

  isReportType(type: string): boolean {
    return this.reportType === type || this.isReportCustomAndOfDoctorOrPatientType(type);
  }

  isCustomReportType(): boolean {
    return !!this.customReportTypes.find(cr => cr.reportTypeName === this.reportType);
  }

  isReportCustomAndOfDoctorOrPatientType(type: string): boolean {
    if (this.customReportType) {
      return (
        (type === this.reportTypes.doctor && this.customReportType.isDoctor) ||
        (type === this.reportTypes.patient && !this.customReportType.isDoctor)
      );
    }
    return false;
  }

  private getSelectedLanguageCode() {
    return this.languagesTypes[this.getSelectedLanguage()];
  }

  private getSelectedLanguage() {
    return this.isReportType(this.reportTypes.doctor) ? this.viewModel.selectedLangDoctor : this.viewModel.selectedLangPatient;
  }

  private getReportContainer() {
    return this.isReportType(this.reportTypes.doctor) ? this.reportContentDoctor : this.reportContentPatient;
  }

  private getTitleLabel() {
    return this.isCustomReportType() ? this.customReportType.title : `report.${this.reportType.toLowerCase()}`;
  }

  private removeSummaryEditButton() {
    const reportContainer: ElementRef = this.getReportContainer();
    Array.from(reportContainer.nativeElement.childNodes).forEach((item: HTMLElement) => {
      const buttons: HTMLCollectionOf<Element> = item.getElementsByTagName('BUTTON');
      if (buttons.length !== 0) {
        this.renderer2.removeChild(item, buttons[0]);
      }
    });
  }

  private addSummaryEditButton() {
    const reportContainer: ElementRef = this.getReportContainer();
    const reportContainerElements: HTMLElement[] = Array.from(reportContainer.nativeElement.childNodes);
    const buttonParent: HTMLElement = reportContainerElements.find((item: HTMLElement) => item.id === 'summary-title');
    if (buttonParent) {
      this.renderSummaryEditButton(buttonParent);
    }
  }

  private renderSummaryEditButton(parent: HTMLElement) {
    this.renderer2.appendChild(parent, this.prepareButton());
  }

  private prepareButton() {
    const button = this.renderer2.createElement('button');
    const buttonText = this.renderer2.createText('EDIT');
    this.renderer2.addClass(button, 'edit-summary-button');
    this.renderer2.appendChild(button, buttonText);

    this.renderer2.listen(button, 'click', (event: Event) => {
      this.dialogService
        .open(ReportSummaryEditComponent, {
          data: { reportLang: this.viewModel.selectedLangDoctor, summary: this.textReport.reportSummary },
          showHeader: false,
          style: { 'margin-top': '317px', 'margin-left': '-30px' },
          contentStyle: { padding: '0' },
          dismissableMask: false
        })
        .onClose.subscribe((result: ReportSummaryApiModel[]) => {
          if (result) {
            this.textReport.reportSummary = result;
            this.textReportService.updateTextReport(this.textReport, false).subscribe(() => {
              this.getReportText();
            });
          }
        });
      event.stopPropagation();
    });
    return button;
  }
}
