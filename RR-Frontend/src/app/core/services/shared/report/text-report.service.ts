import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { lowerFirst } from 'lodash';

import { TextReportApiModel } from '@models/shared/report/text-report-api';
import { TextReportUiModel } from '@models/shared/report/text-report-ui';

import { TextReportMapper } from '@mappings/shared/report/text-report.mapper';

import { NavigationService } from '@services/shared';

import { AppConfig } from 'app/app.config';
import { IModuleConfigBase } from '@interfaces/configs';
import { ReportGetParams } from '@models/shared/report/report-get-params';
import { LocalizerTypeEnum } from '@enums/shared/report/localizer-type.enum';
import { ReportUiModel } from '@models/shared/report';
import { ReportPageViewModel } from '@models/shared/report/report-page-view.model';
import { ReportTypes } from '@models/shared/report/report-types';
import { HtmlReportHelper } from './html-report-helper.service';
import { ModuleLifecyclesBase } from '@abstractions/module-lifecycle-base/module-lifecycles-base';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';

@Injectable({
  providedIn: 'root'
})
export class TextReportService extends ModuleLifecyclesBase {
  private pendingUpdate$: BehaviorSubject<boolean>;

  readonly reportTypes = ReportTypes;

  constructor(
    moduleLifecycleService: ModuleLifecycleService,
    private httpClient: HttpClient,
    private reportMapper: TextReportMapper,
    private navService: NavigationService,
    private htmlReportHelper: HtmlReportHelper
  ) {
    super(moduleLifecycleService);
  }

  get baseUrl() {
    return AppConfig.settings.baseUrl;
  }

  moduleOnInit() {
    this.buildAwaitStream();
  }

  getTextReport(reportParams: ReportGetParams, isWithHtmlGeneration: boolean): Observable<TextReportUiModel> {
    const currentModule = this.navService.getReportData().examinationType;

    let params = new HttpParams().set('reportTypeName', reportParams.reportTypeName).set('reportId', reportParams.reportId);

    if (isWithHtmlGeneration) {
      params = new HttpParams()
        .set('reportTypeName', reportParams.reportTypeName)
        .set('reportId', reportParams.reportId)
        .set('languageCode', reportParams.lang)
        .set('localizerType', reportParams.localizerType)
        .set('isICD10', String(reportParams.icd10))
        .set('isReferenceImage', String(reportParams.referenceImage));
    }

    const reportUrl = this.baseUrl + '/' + (AppConfig.settings.servicesUrls[lowerFirst(currentModule)] as IModuleConfigBase).report;
    const reportEndpointName = isWithHtmlGeneration ? '/GetTextReport' : '/GetReportResult';

    return this.httpClient
      .get<TextReportApiModel>(reportUrl + reportEndpointName, { params })
      .pipe(
        map((src: TextReportApiModel) => {
          const out = new TextReportUiModel();
          return this.reportMapper.mapToUI(src, out);
        })
      );
  }

  updateTextReport(model: TextReportUiModel, isApproval: boolean): Observable<TextReportUiModel> {
    this.pendingUpdate$.next(true);
    let modelAPI = new TextReportApiModel();
    const headers = new HttpHeaders({ autosave: 'true' });
    const currentModule = this.navService.getReportData().examinationType;

    modelAPI = this.reportMapper.mapToAPI(model, modelAPI);
    modelAPI.reportHtml = null;

    const reportUrl = this.baseUrl + '/' + (AppConfig.settings.servicesUrls[lowerFirst(currentModule)] as IModuleConfigBase).report;
    const reportEndpointName = isApproval ? '/ApproveReportResult' : '/UpdateReportResult';
    const params = new HttpParams().set('reportId', model.reportId);

    return this.httpClient
      .post<TextReportApiModel>(reportUrl + reportEndpointName, modelAPI, { headers, params })
      .pipe(
        map((src: TextReportApiModel) => {
          const out = new TextReportUiModel();
          return this.reportMapper.mapToUI(src, out);
        }),
        tap(_ => this.pendingUpdate$.next(false)),
        catchError(error => {
          this.pendingUpdate$.next(false);
          return throwError(error);
        })
      );
  }

  createNewReportResult(id: string, isDoctorType: boolean): TextReportUiModel {
    const result = new TextReportUiModel();
    result.reportId = id;
    result.isLocalizer = true;
    if (isDoctorType) {
      result.isICD10 = false;
      result.isReferenceImage = true;
    }
    return result;
  }

  prepareFullReportParams(
    report: ReportUiModel,
    viewModel: ReportPageViewModel,
    reportType: string,
    isDoctorType: boolean,
    language: string
  ): ReportGetParams {
    return {
      lang: language,
      reportTypeName: report.examinationType + '_' + reportType,
      localizerType: viewModel.isLocalizer ? LocalizerTypeEnum.Svg : LocalizerTypeEnum.None,
      referenceImage: isDoctorType ? viewModel.isReferenceImage : false,
      icd10: isDoctorType ? viewModel.isICD10 : false,
      reportId: report.id.toString()
    };
  }

  prepareResultReportParams(report: ReportUiModel, reportType: string): ReportGetParams {
    return {
      lang: null,
      reportTypeName: report.examinationType + '_' + reportType,
      localizerType: LocalizerTypeEnum.None,
      referenceImage: false,
      icd10: false,
      reportId: report.id.toString()
    };
  }

  // only for doctor report with localizers
  prepareReportCopyingParams(report: ReportUiModel, viewModel: ReportPageViewModel, reportType: string, language: string): ReportGetParams {
    return {
      lang: language,
      reportTypeName: report.examinationType + '_' + reportType,
      localizerType: LocalizerTypeEnum.Png,
      referenceImage: viewModel.isReferenceImage,
      icd10: viewModel.isICD10,
      reportId: report.id.toString()
    };
  }

  async copyToClipboard(typeName: string, report: ReportUiModel, viewModel: ReportPageViewModel, reportType: string, language: string) {
    const header = document.getElementById(typeName.toLowerCase() + '-report-header').cloneNode(true);
    const discussion = await this.htmlReportHelper.createClipboardDiscussionSection(viewModel.discussion);

    if (viewModel.isLocalizer) {
      const params: ReportGetParams = this.prepareReportCopyingParams(report, viewModel, reportType, language);

      this.getTextReport(params, true).subscribe(async textReport => {
        const elements = this.htmlReportHelper.parseHtmlReport(textReport.reportHtml);
        const content = document.createElement('div');
        elements.forEach((e: HTMLOrSVGImageElement) => {
          if (e.tagName === 'DIV' || e.tagName === 'SPAN') {
            content.appendChild(e);
          }
        });

        this.htmlReportHelper.copyToClipboard(header, content, discussion);
      });
    } else {
      const content = document.getElementById(typeName + '-report-content').cloneNode(true);
      this.htmlReportHelper.copyToClipboard(header, content, discussion);
    }
  }

  moduleOnDestroy() {}

  getAwaitStream() {
    return this.pendingUpdate$.pipe(distinctUntilChanged());
  }

  private buildAwaitStream() {
    this.pendingUpdate$ = new BehaviorSubject<boolean>(false);
  }
}
