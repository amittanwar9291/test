import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { minBy } from 'lodash';

import { BehaviorSubject, Subscription } from 'rxjs';

import { ReportUiModel } from '@models/shared/report';

import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';

import { LoggingService } from '../logging/logging.service';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';
import { NavigationRestoreService } from './navigation-restore.service';
import { ModuleLifecycleService } from '../module-lifecycle/module-lifecycle.service';
import { ReportMapper } from '@mappings/shared/report/report.mapper';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { Guid } from '@models/shared/guid/guid';
import { NavigationRoutes } from './navigation-consts';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy {
  private stream$: BehaviorSubject<NavigationStreamModel>;

  private slideNameTranslationStream: Subscription;

  constructor(
    http: HttpClient, // TODO: delete deprecated
    mapper: ReportMapper, //// TODO: delete deprecated
    private navigationStreamService: AbstractNavigationStreamService,
    private navigationDataService: AbstractNavigationReportDataService,
    private navigationRestoreService: NavigationRestoreService,
    private moduleLifecycles: ModuleLifecycleService,
    private router: Router,
    private translate: TranslateService,
    private logger: LoggingService
  ) {
    this.restoreFromUrl();
  }

  getCurrentPageNumber(): number {
    return this.navigationDataService.getCurrentPageNumber();
  }

  // old navigate + navigateToNew
  navigate(id: any, moduleType: string, pageNr?: number): Promise<void> {
    if (Guid.isEmpty(id)) {
      throw new Error('Incorrect id!');
    }

    return this.navigationDataService.getReport(id, moduleType).then(() => {
      const navPageNumber = pageNr ? pageNr : 1;

      this.routeToPage(navPageNumber);
    });
  }

  navigateToLastSaved(id: any, moduleType: string): Promise<void> {
    if (Guid.isEmpty(id)) {
      throw new Error('Incorrect id!');
    }

    return this.navigationDataService.getReport(id, moduleType).then(() => {
      const reportData: ReportUiModel = this.getReportData();
      const lastReportPage = reportData.pages.filter(page => page.wasModified).pop();

      const navPageNumber = lastReportPage ? lastReportPage.pageNumber : 1;

      this.routeToPage(navPageNumber);
    });
  }

  // to be removed
  navigateToLink(link: string) {
    this.router.navigate([link]);
  }

  restoreFromUrl() {
    const restoreData = this.navigationRestoreService.getRestoreData();

    if (restoreData) {
      this.router.navigate(['/']);
      this.navigationRestoreService.setRestoreStream(true);

      if (Guid.isEmpty(restoreData.reportId)) {
        restoreData.reportId = NavigationRoutes.GetEmptySaved;
      }

      this.navigate(restoreData.reportId, restoreData.moduleName, restoreData.pageNumber).then(() => {
        this.moduleLifecycles.triggerInit();
        this.navigationRestoreService.setRestoreStream(false);

        this.translate.onLangChange.pipe(take(1)).subscribe(val => {
          this.emitStream();
        });
      });
    }
  }

  refresh() {
    const pageUrl = this.navigationDataService.getCurrentPageUrl();
    this.router.navigate([pageUrl]);
  }

  setPage(pageNumber: number) {
    this.routeToPage(pageNumber);
  }

  // propably shoud be deleted as navigation no longer handles saves
  setPageWithoutSaving(pageNumber: string) {
    this.navigationDataService.setCurrentPageId(pageNumber);

    this.emitStream();

    this.router.navigate([this.navigationDataService.getCurrentPageUrl()]);
  }

  routeToPage(pageNumber: number) {
    this.navigationDataService.setCurrentPage(pageNumber);
    this.emitStream();

    const pageUrl = this.navigationDataService.getCurrentPageUrl();
    this.router.navigate([pageUrl]);
  }

  getPageNumber(page: string): number {
    return this.navigationDataService.getCurrentPageNumber();
  }

  close(): Promise<boolean> {
    return this.router.navigate(['/reports']);
  }

  goNextPage() {
    const nextPageNumber = this.navigationDataService.getNextPageNumber();

    this.routeToPage(nextPageNumber);
  }

  goPrevPage() {
    const prevPageNumber = this.navigationDataService.getPreviousPageNumber();

    this.routeToPage(prevPageNumber);
  }

  getReportData(): ReportUiModel {
    return this.navigationDataService.getReportData();
  }

  private emitStream() {
    this.navigationStreamService.emitStream(this.navigationDataService.getReportData(), this.navigationDataService.getCurrentPageNumber());
  }

  ngOnDestroy() {
    this.logger.logHook('ngOnDestroy started...', 'NG_DESTROY_NAV');

    this.stream$.unsubscribe();
    this.slideNameTranslationStream.unsubscribe();

    this.logger.logHook('ngOnDestroy finished.', 'NG_DESTROY_NAV');
  }
}
