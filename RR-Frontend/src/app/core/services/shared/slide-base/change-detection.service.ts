import { Injectable } from '@angular/core';

import { AppConfig } from 'app/app.config';

import { tap, auditTime, distinctUntilChanged, filter, take, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';

import { SlideRequestService } from './slide-request.service';
import { AbstractNavigationReportDataService } from '@abstractions/abstract-classes/navigation/navigation-report-data';

import { ChangeDetectionModel } from '@models/shared/slide/change-detection.model';

import { includes, find } from 'lodash';
import { ModuleLifecyclesBase } from '@abstractions/module-lifecycle-base/module-lifecycles-base';
import { ModuleLifecycleService } from '../module-lifecycle/module-lifecycle.service';
import { Guid } from '@models/shared/guid/guid';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService extends ModuleLifecyclesBase {
  private pagesChangeModels: ChangeDetectionModel[];

  private isAnyAwaiting$: BehaviorSubject<boolean>;
  private combinedPendingsSubscription: Subscription;
  private omitAudit$: BehaviorSubject<boolean>;

  constructor(
    private saveService: SlideRequestService,
    private navDataService: AbstractNavigationReportDataService,
    moduleLifecycles: ModuleLifecycleService
  ) {
    super(moduleLifecycles);

    this.omitAudit$ = new BehaviorSubject(false);
  }

  moduleOnInit() {
    this.initialize();
    this.buildAwaitStream();
  }

  public triggerChange(page?: number) {
    const pageNumber = page ? page : this.navDataService.getCurrentPageNumber();

    const currentChangeModel = find(this.pagesChangeModels, { pageNumber }) as ChangeDetectionModel;

    if (currentChangeModel) {
      currentChangeModel.changes$.next();
    } else {
      console.error('error');
    }
  }

  public getAwaitStream() {
    return this.isAnyAwaiting$.pipe(distinctUntilChanged());
  }

  public skipAudit() {
    this.omitAudit$.next(true);
  }

  public setTriggerCallback(callback: () => void, pageNumber?: number) {
    if (!pageNumber) {
      pageNumber = this.navDataService.getCurrentPageNumber();
    }

    this.pagesChangeModels[pageNumber - 1].triggerCallback = callback;
  }

  private setTriggerSubscription(changeModel: ChangeDetectionModel) {
    const auditedStream$ = changeModel.changes$.pipe(
      tap(() => changeModel.isPending$.next(true)),
      auditTime(AppConfig.settings.autosaveTime)
    );

    changeModel.triggerSubscription = this.omitAudit$
      .pipe(switchMap(value => (value && changeModel.isPending$.value ? EMPTY : auditedStream$)))
      .subscribe(() => {
        this.triggerPageSave(changeModel);
      });

    this.omitAudit$.pipe(filter(val => !!val && changeModel.isPending$.value)).subscribe(() => {
      this.triggerPageSave(changeModel);

      this.omitAudit$.next(false);
    });
  }

  private triggerPageSave(changeModel: ChangeDetectionModel) {
    this.saveService.save(changeModel.pageNumber);

    if (changeModel.triggerCallback) {
      changeModel.triggerCallback();
    }

    changeModel.isPending$.next(false);
  }

  private setFirstSaveSubscription(changeModel: ChangeDetectionModel) {
    changeModel.firstSaveSubscription = changeModel.changes$
      .pipe(filter(() => this.needPageBeMarkedAsModified(changeModel)))
      .subscribe(() => {
        this.navDataService.setPageAsModified(changeModel.pageNumber);
      });
  }

  private needPageBeMarkedAsModified(changeModel: ChangeDetectionModel): boolean {
    const reportData = this.navDataService.getReportData();
    const pageData = reportData.pages[changeModel.pageNumber - 1];

    return !Guid.isEmpty(pageData.pageId) && !pageData.wasModified;
  }

  private initialize() {
    const pageCount = this.navDataService.getRaportPagesCount();

    this.pagesChangeModels = [];
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
      this.pagesChangeModels.push(new ChangeDetectionModel(pageNumber));
    }

    for (const changeModel of this.pagesChangeModels) {
      if (changeModel) {
        this.setTriggerSubscription(changeModel);
        this.setFirstSaveSubscription(changeModel);
      } else {
        console.error('error');
      }
    }
  }

  private buildAwaitStream() {
    this.isAnyAwaiting$ = new BehaviorSubject<boolean>(false);

    const pendingArray = [];
    for (const changeModel of this.pagesChangeModels) {
      pendingArray.push(changeModel.isPending$.pipe(distinctUntilChanged()));
    }

    this.combinedPendingsSubscription = combineLatest(pendingArray).subscribe((value: boolean[]) => {
      this.isAnyAwaiting$.next(this.checkIfAnyPending(value));
    });
  }

  private checkIfAnyPending(array: boolean[]) {
    return includes(array, true);
  }

  moduleOnDestroy() {
    this.combinedPendingsSubscription.unsubscribe();

    for (const changeModel of this.pagesChangeModels) {
      changeModel.triggerSubscription.unsubscribe();
      changeModel.firstSaveSubscription.unsubscribe();
    }
  }
}
