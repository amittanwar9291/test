import { HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { ReportUiModel } from '@models/shared/report';
import { PageUrlModel } from '@models/shared/navigation/page-url.model';
import { PageNavDataModel } from '@models/shared/navigation/page-nav-data.model';
import { ReportPageUiModel, ReportPageApiModel } from '@models/shared/navigation';
import { ReportPatientUiModel } from '@models//shared/report/report-patient-ui.model';

import { IDictionary } from '@interfaces/dictionary.interface';

import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';

import { cloneDeep } from 'lodash';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Guid } from '@models/shared/guid/guid';
import { AppConfig } from 'app/app.config';
import { IModuleConfigBase } from '@interfaces/configs/module-config-base.interface';
import { ReportHttpService } from './report-http.service';
import { filter, map, pairwise } from 'rxjs/operators';
import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationReportDataService extends AbstractNavigationReportDataService {
  private reportData: ReportUiModel;
  private reportWithPatientData: ReportPatientUiModel;
  private presetRoutes: IDictionary<PageUrlModel>;

  private reportDataStream$: BehaviorSubject<ReportUiModel>;
  private pageDeletionStream$: Observable<number[]>;

  private currentPageNumber: number;

  constructor(
    private reportHttpService: ReportHttpService,
    private navStreamService: AbstractNavigationStreamService,
    @Inject('moduleRoutes') private moduleRoutesDictionaries: IDictionary<IDictionary<PageUrlModel>>
  ) {
    super();

    this.reportDataStream$ = new BehaviorSubject<ReportUiModel>(new ReportUiModel());
    this.pageDeletionStream$ = this.createPageDeletionStream();
  }

  getReport(id: any, moduleName: string): Promise<ReportUiModel> {
    this.swapReportServiceURL(moduleName);

    return this.reportHttpService
      .get(id)
      .toPromise()
      .then((outReport: ReportUiModel) => {
        this.reportData = outReport;

        this.emitReportData(outReport);
        return cloneDeep(this.reportData);
      });
  }

  refreshReport() {
    this.reportHttpService
      .getWithPatient(this.reportData.id)
      .toPromise()
      .then((outReport: ReportPatientUiModel) => {
        this.reportData = outReport.report;
        this.reportWithPatientData = outReport;
        this.navStreamService.emitStream(this.reportData, this.currentPageNumber);
        this.emitReportData(outReport.report);
      });
  }

  postReport(report: ReportUiModel, headers?: HttpHeaders): Promise<ReportUiModel> {
    this.swapReportServiceURL(report.examinationType);

    return this.reportHttpService
      .post(report, headers)
      .toPromise()
      .then(outReport => {
        this.reportData = outReport;

        this.emitReportData(outReport);
        return outReport;
      });
  }

  getReportData(): ReportUiModel {
    return cloneDeep(this.reportData);
  }

  getReportWithPatientData(): ReportPatientUiModel {
    return cloneDeep(this.reportWithPatientData);
  }

  getReportStream(): Subject<ReportUiModel> {
    return this.reportDataStream$;
  }

  private emitReportData(report: ReportUiModel) {
    this.reportDataStream$.next(cloneDeep(report));
  }
  getReportId(): string {
    if (this.reportData) {
      return this.reportData.id;
    } else {
      return Guid.createEmpty();
    }
  }

  private swapReportServiceURL(moduleName: string) {
    const moduleNameParsed = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);
    const servicesUrl = AppConfig.settings.servicesUrls[moduleNameParsed] as IModuleConfigBase;

    if (!moduleNameParsed || !servicesUrl) {
      throw new Error('Incorrect module name!');
    }

    this.reportHttpService.setRoute(servicesUrl.localBaseURL, servicesUrl.report);
    this.presetRoutes = this.moduleRoutesDictionaries[moduleName];
  }

  private getPageUrl(pageNumber: number): string {
    const pageData = this.getPageData(pageNumber);
    if (pageData && pageData.url) {
      return pageData.url + '/' + this.reportData.id;
    } else {
      throw new Error('Can\'t get page data!');
    }
  }

  getCurrentPageUrl(): string {
    return this.getPageUrl(this.currentPageNumber);
  }

  getNextPageNumber(): number {
    let nextPageNumber = Infinity;
    for (const page of this.reportData.pages) {
      if (this.isPageAccesible(page) && page.pageNumber > this.currentPageNumber && page.pageNumber < nextPageNumber) {
        nextPageNumber = page.pageNumber;
      }
    }

    if (nextPageNumber === Infinity || nextPageNumber === this.currentPageNumber) {
      throw new Error('Can\'t get next page number!');
    }

    return nextPageNumber;
  }

  getPreviousPageNumber(): number {
    let prevPageNumber = -Infinity;
    for (const page of this.reportData.pages) {
      if (this.isPageAccesible(page) && page.pageNumber < this.currentPageNumber && page.pageNumber > prevPageNumber) {
        prevPageNumber = page.pageNumber;
      }
    }

    if (prevPageNumber === -Infinity || prevPageNumber === this.currentPageNumber) {
      throw new Error('Can\'t get previous page number!');
    }

    return prevPageNumber;
  }

  private isPageAccesible(page: ReportPageApiModel): boolean {
    return page && !page.isBlocked;
  }

  setCurrentPageId(id: string) {
    this.setPageId(this.getCurrentPageNumber(), id);
  }

  setPageId(pageNumber: number, id: string) {
    if (this.reportData.pages && this.reportData.pages[pageNumber - 1]) {
      this.reportData.pages[pageNumber - 1].pageId = id;
    } else {
      throw new Error('Can\t set page id!');
    }

    this.navStreamService.emitStream(this.reportData, this.currentPageNumber);
  }

  setPageAsModified(pageNumber: number) {
    if (!this.reportData.pages || !this.reportData.pages[pageNumber - 1]) {
      throw new Error('Can\t set page as modified!');
    }
    const pageData = this.reportData.pages[pageNumber - 1];

    this.reportHttpService.markAsModified(this.reportData.id, pageData.pageId).subscribe(() => {
      this.reportData.pages[pageNumber - 1].wasModified = true;
      this.navStreamService.emitStream(this.reportData, this.currentPageNumber);
    });
  }

  getCurrentPageNumber(): number {
    return this.currentPageNumber;
  }

  getRaportPagesCount(): number {
    return this.reportData.pages ? this.reportData.pages.length : 0;
  }

  setCurrentPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.reportData.pages.length + 1) {
      this.currentPageNumber = pageNumber;
    } else {
      throw new Error('Incorrect page number!');
    }
  }

  private getPageData(pageNumber: number): PageNavDataModel {
    let pageData: PageUrlModel;
    let reportPageData: ReportPageUiModel;

    try {
      reportPageData = this.reportData.pages.find(x => x.pageNumber === pageNumber);
      pageData = this.presetRoutes[reportPageData.typeName];
    } catch (error) {
      throw new Error('Could not retrieve page data!');
    }
    return { id: reportPageData.id, ...pageData };
  }

  public getPageDeletionStream(): Observable<number[]> {
    return this.pageDeletionStream$;
  }

  private createPageDeletionStream() {
    return this.navStreamService.getStream().pipe(
      pairwise(),
      map((streamDataPair: NavigationStreamModel[]) => {
        return this.getBlockedPagesToDeleteNumber(streamDataPair[0], streamDataPair[1]);
      }),
      filter((pagesArray: number[]) => {
        return pagesArray?.length > 0;
      })
    );
  }

  private getBlockedPagesToDeleteNumber(statePre: NavigationStreamModel, statePost: NavigationStreamModel): number[] {
    const recentlyBlocked: number[] = [];

    for (let i = 0; i < statePre.pages.length; i++) {
      if (Guid.isEmpty(statePre.pages[i].pageId)) {
        continue;
      }

      if (!statePre.pages[i].isBlocked && statePost.pages[i].isBlocked) {
        recentlyBlocked.push(i);
      }
    }

    return recentlyBlocked;
  }
}
