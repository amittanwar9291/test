import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { merge } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, take, takeUntil } from 'rxjs/operators';

import { AppConfig } from 'app/app.config';

import { NavigationConnectorService } from '@services/shared/navigation/navigation-connector.service';

import { cloneDeep, isEqual, isArray, isObjectLike, includes, isPlainObject, forIn } from 'lodash';

import { IHttpService } from '@interfaces/http-service.interface';

import { ModelBase } from '@models/model-base';

@Injectable({
  providedIn: 'root'
})
export class CoreViewsAutosaveService<TModel extends ModelBase> {
  private changes$: Subject<void>;
  private modelUpdated$: Subject<TModel>;
  private previousModel: TModel;
  private omitAudit$: Subject<void>;
  private updatePending$: BehaviorSubject<boolean>;
  private awaitStream$: BehaviorSubject<boolean>;
  private modelChangesPending$: BehaviorSubject<boolean>;

  private saveSubscription: Subscription;
  private connectorSubscription: Subscription;
  private awaitSubscription: Subscription;

  private model: TModel;

  private afterSaveCallback: (model: TModel) => void;
  private preSaveCallback: (model: TModel) => void;

  constructor(
    private saveHttpService: IHttpService,
    private navigationConnectorService: NavigationConnectorService,
    private router: Router
  ) {
    this.changes$ = new Subject();
    this.modelUpdated$ = new Subject<TModel>();
    this.omitAudit$ = new Subject<void>();
    this.updatePending$ = new BehaviorSubject<boolean>(false);
    this.awaitStream$ = new BehaviorSubject<boolean>(false);
    this.modelChangesPending$ = new BehaviorSubject(false);

    this.setSaveSubscription();
    this.initConnectorService();
    this.buildAwaitStream();
  }

  private setSaveSubscription(): void {
    this.saveSubscription = merge(
      this.changes$.pipe(auditTime(AppConfig.settings.autosaveTime), takeUntil(this.omitAudit$)),
      this.omitAudit$.pipe(filter(() => this.modelChangesPending$.value))
    ).subscribe(() => {
      if (this.updatePending$.value) {
        return;
      } else {
        this.save(this.model);
      }
    });
  }

  triggerChange(data): void {
    this.model = data;
    this.changes$.next(data);
    this.modelChangesPending$.next(true);
  }

  registerSaveCallback(callback: (model: TModel) => void): void {
    this.afterSaveCallback = callback;
  }

  registerPreSaveCallback(callback: (model: TModel) => void): void {
    this.preSaveCallback = callback;
  }

  getModelUpdatedStream(): Observable<TModel> {
    return this.modelUpdated$;
  }

  skipAudit() {
    this.omitAudit$.next();
  }

  private save(data: TModel): void {
    this.updatePending$.next(true);
    if (this.preSaveCallback) {
      this.preSaveCallback(data);
    }
    this.saveHttpService.update(cloneDeep(data), new HttpHeaders({ autosave: String(true) })).subscribe((response: TModel) => {
      this.modelUpdated$.next(response);
      this.modelChangesPending$.next(false);
      this.updatePending$.next(false);
      if (this.afterSaveCallback) {
        this.afterSaveCallback(response);
      }
    });
  }

  private buildAwaitStream() {
    this.awaitSubscription = combineLatest([
      this.modelChangesPending$.pipe(distinctUntilChanged()),
      this.updatePending$.pipe(distinctUntilChanged())
    ])
      .pipe(map(sourceObservables => !includes(sourceObservables, true)))
      .subscribe(val => {
        this.awaitStream$.next(val);
      });
  }

  /**
   * Methods used to block navigation to other page if there are pending model changes that haven't been autosaved yet.
   */

  private initConnectorService() {
    this.connectorSubscription = this.navigationConnectorService.getNavToLinkStream().subscribe((link: string) => {
      this.scheduleAction(() => {
        this.router.navigate([link]); // TODO consider NavigationService.navigateToLink(link)
      });
    });
  }

  private scheduleAction(action: () => void) {
    if (this.awaitStream$.value) {
      action();
    } else {
      this.skipAudit(); // TODO consider this action
      this.awaitStream$
        .pipe(
          filter(val => !!val),
          take(1)
        )
        .subscribe(() => {
          action();
        });
    }
  }

  /**
   * Methods used to compare current and previous model (that has been sent to the backend on the recent autosave request).
   */

  setModelToCompareWith(model: TModel): void {
    this.previousModel = this.getModelWithoutIds(cloneDeep(model));
  }

  isEqualOrEmpty(model: TModel): boolean {
    return isEqual(this.getModelWithoutIds(model), this.previousModel) || !this.previousModel;
  }

  private getModelWithoutIds(inputModel) {
    const { id, reportId, ...modelWithoutIds } = inputModel;
    const modelWithoutValidationId = this.omitDeepValidationId(modelWithoutIds);
    return modelWithoutValidationId;
  }

  /**
   * This prevents marking model as different when the 'validationId' property differs (and it differs always when
   * simply toggling an active finding without any model changes which unnecessarily triggers autosave).
   */
  private omitDeepValidationId(model) {
    forIn(model, (value, key) => {
      if (key === 'validationId') {
        delete model[key];
      } else if (isArray(value)) {
        model[key].forEach(item => {
          this.omitDeepValidationId(item);
        });
      } else if (isPlainObject(value)) {
        this.omitDeepValidationId(value);
      }
    });

    return model;
  }

  unsubscribeSubscriptions(): void {
    this.saveSubscription.unsubscribe();
    this.connectorSubscription.unsubscribe();
    this.awaitSubscription.unsubscribe();
  }
}
