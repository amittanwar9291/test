import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { NavigationService } from '..';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';

import { IHttpService } from '@interfaces/http-service.interface';
import { IReport } from '@interfaces/report.interface';

import { ReportUiModel } from '@models/shared/report';
import { IModel } from '@interfaces/model.interface';

import { HttpAgregate } from './http-agregate';

import { uniq, includes } from 'lodash';
import { BehaviorSubject, combineLatest, of, Subscription } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

import { ReportPageApiModel } from '@models/shared/navigation/report-page-api.model';
import { NavigationRestoreService } from '../navigation/navigation-restore.service';
import { ModuleLifecyclesBase } from '@abstractions/module-lifecycle-base/module-lifecycles-base';
import { ModuleLifecycleService } from '../module-lifecycle/module-lifecycle.service';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { Guid } from '@models/shared/guid/guid';
import { UserBasicDataService } from '../logged-user/user-basic-data.service';
import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

@Injectable({
  providedIn: 'root'
})
export class SlideRequestService extends ModuleLifecyclesBase {
  // Report and slides state
  private httpServicesHandler: HttpAgregate;
  reportData: ReportUiModel;

  // Current page data
  currentPageNumber: number;
  pageTypeName: string;

  // Report type
  reportType: string;

  // Saving queues
  isPostingReport$: BehaviorSubject<boolean>;
  pagesPending: Array<number>;

  // Subscriptions
  pageDeleteSubscription: Subscription;

  constructor(
    private navService: NavigationService,
    private navDataService: AbstractNavigationReportDataService,
    private navRestoreService: NavigationRestoreService,
    moduleLifecycles: ModuleLifecycleService,
    private httpListService: HttpListService,
    private userDataService: UserBasicDataService
  ) {
    super(moduleLifecycles);
    this.isPostingReport$ = new BehaviorSubject<boolean>(false);
    this.pagesPending = [];
  }

  moduleOnInit() {
    // angular module destroy bug workaround (will be usefull during cross-module operations)
    if (!this.canInitialize()) {
      return;
    }

    // need to wait for nav service to end rerouting
    // caused by angular bug thats omits modul services onDestroy
    // slideRequest is being injected too early
    // TODO: find better solution
    this.navRestoreService.performWhenReady(() => {
      this.initialize(this.httpListService.getServices());
    });

    this.createPageDeletionSubscription();
  }

  initializePage(modelRef: { model: IReport }, pageNumber?: number, modelCtor?: INoParamConstructor<IReport>): Promise<IModel> {
    return this.navRestoreService
      .performWhenReady(() => {
        this.setHttpHandlerModelReff(modelRef, pageNumber);
        this.setHttpHandlerModelCtor(modelCtor, pageNumber);
      })
      .then(() => {
        return this.initializeHttpHandlerData(pageNumber);
      });
  }

  private setHttpHandlerModelReff(modelRef: { model: IReport }, pageNumber: number) {
    this.refreshPageData();

    let pageTypeName = '';
    if (pageNumber) {
      pageTypeName = this.getPageData(pageNumber).typeName;
      this.httpServicesHandler.setModelRef(modelRef, pageTypeName, pageNumber - 1);
    } else {
      this.httpServicesHandler.setModelRef(modelRef, this.pageTypeName, this.currentPageNumber - 1);
    }
  }

  private setHttpHandlerModelCtor(modelCtor: INoParamConstructor<IReport>, pageNumber: number) {
    if (modelCtor) {
      this.httpServicesHandler.setPageModelCtor(modelCtor, pageNumber ?? this.currentPageNumber - 1);
    }
  }

  private initializeHttpHandlerData(pageNumber: number): Promise<IModel> {
    const omitCallback = !!pageNumber;
    pageNumber = pageNumber ? pageNumber : this.currentPageNumber;

    return this.httpServicesHandler.initializeData(pageNumber - 1, undefined, omitCallback).toPromise();
  }

  savePageOnSlideEnter(pageModel: IModel): Promise<IModel> {
    if (!Guid.isEmpty(pageModel.id) || !Guid.isEmpty((pageModel as IReport).reportId)) {
      return of(pageModel).toPromise();
    }

    this.httpServicesHandler.setPageReportId(this.currentPageNumber - 1, this.reportData.id);
    this.save();

    return of(pageModel).toPromise();
  }

  setGetCallback(callback: (out: IModel) => void) {
    this.httpServicesHandler.setGetCallback(callback);
  }

  setPostSaveCallback(pageNumber: number, callback: (out: IModel) => void) {
    this.httpServicesHandler.setPostCallback(pageNumber, (out: IModel) => {
      this.navDataService.setPageId(pageNumber, out.id);
      callback(out);
    });

    this.httpServicesHandler.setUpdateCallback(pageNumber, callback);
  }

  setPreSaveCallback(pageNumber: number, callback: () => void) {
    this.httpServicesHandler.setPrePostCallback(pageNumber, callback);
    this.httpServicesHandler.setPreUpdateCallback(pageNumber, callback);
  }

  getAwaitStream() {
    return combineLatest([this.httpServicesHandler.getAwaitStream(), this.isPostingReport$]).pipe(
      map(array => includes(array, true)),
      distinctUntilChanged()
    );
  }

  save(pageNumber: number = this.currentPageNumber) {
    if (!this.canUserSave()) {
      return;
    }

    if (this.navDataService.getReportData() && !Guid.isEmpty(this.navDataService.getReportData().id)) {
      this.savePage(pageNumber);
    } else {
      this.createReportAndPage(pageNumber);
    }
  }

  getModelReff(pageNumber: number = this.currentPageNumber) {
    if (!this.httpServicesHandler) {
      return;
    }

    return this.httpServicesHandler.getModelReff(pageNumber);
  }

  clear() {
    this.httpServicesHandler.reset();

    this.isPostingReport$.next(false);
    this.pagesPending = [];

    this.currentPageNumber = null;
    this.pageTypeName = null;
  }

  private initialize(pageHttpList: IHttpService[]) {
    this.refreshPageData();

    this.reportType = this.navDataService.getReportData().examinationType;
    this.httpServicesHandler = new HttpAgregate(pageHttpList, this.reportData.pages);
  }

  private isReportPageValid() {
    return this.reportData && this.reportData.pages && this.reportData.pages[this.currentPageNumber - 1];
  }

  private getCurrentPageData(): ReportPageApiModel {
    return this.getPageData(this.currentPageNumber);
  }

  private getPageData(pageNumber: number): ReportPageApiModel {
    if (!this.isReportPageValid()) {
      console.error('SlideRequestService::getCurrentPageData raport page invalid');
    }

    return this.reportData.pages[pageNumber - 1];
  }

  private refreshPageData() {
    this.currentPageNumber = this.navService.getCurrentPageNumber();
    this.reportData = this.navService.getReportData();
    this.pageTypeName = this.getCurrentPageData().typeName;
  }

  private savePage(pageNumber: number) {
    if (!this.isPostingReport$.value) {
      this.httpServicesHandler.setPageReportId(pageNumber - 1, this.reportData.id);
      this.httpServicesHandler.save(pageNumber - 1);
    } else {
      this.pagesPending.push(pageNumber - 1);
    }
  }

  private createReportAndPage(pageNumber: number) {
    if (this.isPostingReport$.value) {
      return;
    }

    const currentReport = this.navDataService.getReportData();

    this.isPostingReport$.next(true);
    this.pagesPending.push(pageNumber - 1);

    this.navDataService.postReport(currentReport, new HttpHeaders({ autosave: String(true) })).then((outReport: ReportUiModel) => {
      this.reportData = outReport;
      this.postPendingPages();
      this.isPostingReport$.next(false);

      this.navService.refresh();
    });
  }

  private postPendingPages() {
    if (!this.pagesPending.length) {
      return;
    }

    for (const pageNumber of uniq(this.pagesPending)) {
      this.httpServicesHandler.setPageReportId(pageNumber, this.reportData.id);
      this.httpServicesHandler.save(pageNumber);
    }

    this.pagesPending.length = 0;
  }

  private canInitialize() {
    return this.navDataService.getReportData().examinationType === this.reportType || !this.reportType;
  }

  private canUserSave() {
    const userData = this.userDataService.userData.value;
    if (userData && userData.role === 'Viewer') {
      return false;
    }

    return true;
  }

  moduleOnDestroy() {
    this.httpServicesHandler.destroy();
    this.pageDeleteSubscription.unsubscribe();
  }

  private createPageDeletionSubscription() {
    this.pageDeleteSubscription = this.navDataService.getPageDeletionStream().subscribe(pageNumbers => {
      pageNumbers.forEach(pageNumber => {
        this.httpServicesHandler.deletePageData(pageNumber);
      });
    });
  }
}
