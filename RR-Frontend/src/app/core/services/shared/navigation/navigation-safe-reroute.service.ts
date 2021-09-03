import { Injectable } from '@angular/core';

import { Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { SlideRequestService } from '../slide-base/slide-request.service';
import { ChangeDetectionService } from '../slide-base/change-detection.service';
import { NavigationService } from './navigation.service';
import { NavigationConnectorService } from './navigation-connector.service';
import { ModuleLifecycleService } from '../module-lifecycle/module-lifecycle.service';
import { ModuleLifecyclesBase } from '@abstractions/module-lifecycle-base/module-lifecycles-base';

import { includes } from 'lodash';
import { FormValidationService } from '@services/shared/validation/form-validation.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationSafeRerouteService extends ModuleLifecyclesBase {
  awaitSubscription: Subscription;
  connectorSubscription: Subscription;

  awaitStream$: BehaviorSubject<boolean>;

  constructor(
    private navigationService: NavigationService,
    private changeService: ChangeDetectionService,
    private slideSaveService: SlideRequestService,
    private navigationConnectorService: NavigationConnectorService,
    moduleLifecycles: ModuleLifecycleService,
    private formValidation: FormValidationService
  ) {
    super(moduleLifecycles);

    this.awaitStream$ = new BehaviorSubject<boolean>(false);
  }

  moduleOnInit() {
    this.buildAwaitStream();
    this.initConnectorService();
  }

  private initConnectorService() {
    this.connectorSubscription = this.navigationConnectorService.getNavToLinkStream().subscribe((link: string) => {
      this.navigateToLink(link);
    });
  }

  // restricted actions
  navigate(id: any, moduleType: string, pageNr?: number) {
    if (!this.formValidation.isValid()) {
      return;
    }
    this.scheduleAction(() => {
      this.slideSaveService.clear();
      this.navigationService.navigate(id, moduleType, pageNr);
    });
  }

  navigateToLink(link: string): void {
    if (!this.formValidation.isValid()) {
      return;
    }
    this.scheduleAction(() => {
      this.slideSaveService.clear();
      this.navigationService.navigateToLink(link);
    });
  }

  close(skipValidation = false) {
    if (!skipValidation && !this.formValidation.isValid()) {
      return;
    }
    this.scheduleAction(() => {
      this.slideSaveService.clear();
      this.navigationService.close();
    });
  }

  // unrestricted actions
  goNextPage() {
    if (!this.formValidation.isValid()) {
      return;
    }
    this.scheduleAction(() => {
      this.navigationService.goNextPage();
    });
  }

  goPrevPage() {
    this.navigationService.goPrevPage();
  }

  setPage(pageNumber: number) {
    if (!this.formValidation.isValid() && pageNumber > this.navigationService.getCurrentPageNumber()) {
      return;
    }
    this.scheduleAction(() => {
      this.navigationService.setPage(pageNumber);
    });
  }

  private scheduleAction(action: () => void) {
    if (this.awaitStream$.value) {
      action();
    } else {
      this.changeService.skipAudit();
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

  private buildAwaitStream() {
    this.awaitSubscription = combineLatest([this.changeService.getAwaitStream(), this.slideSaveService.getAwaitStream()])
      .pipe(map(array => !includes(array, true)))
      .subscribe(val => {
        this.awaitStream$.next(val);
      });
  }

  moduleOnDestroy() {
    this.awaitSubscription.unsubscribe();
    this.connectorSubscription.unsubscribe();
  }
}
