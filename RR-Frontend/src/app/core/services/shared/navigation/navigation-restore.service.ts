import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { moduleRoutesDictionaries } from '@environments/pages-routes';

import { IPerformWhenReady } from '@interfaces/navigation/IPeformWhenReady';

import { NavigationRestoreDataModel } from '@models/shared/navigation/navigation-restore-data.model';

import { last } from 'lodash';
import { BehaviorSubject, of, Observable, Subscription } from 'rxjs';
import { filter, take, skip } from 'rxjs/operators';
import { Guid } from '@models/shared/guid/guid';
import { NavigationRoutes } from './navigation-consts';

@Injectable({
  providedIn: 'root'
})
export class NavigationRestoreService implements IPerformWhenReady {
  isRestoring$: BehaviorSubject<boolean>;
  afterRerouteCallbacks: Array<() => void>;
  afterReroute$: Observable<any>;

  aferRerouteSubscription: Subscription;

  constructor(private location: Location) {
    this.isRestoring$ = new BehaviorSubject<boolean>(false);
    this.afterRerouteCallbacks = new Array<() => void>();

    this.createAfterRerouteSubscription();
  }

  getRestoreData(): NavigationRestoreDataModel {
    if (this.isRetrivalNeeded()) {
      const url = this.location.path();

      return {
        moduleName: this.retrieveModuleName(url),
        pageNumber: this.retrievePageNumber(url),
        reportId: this.retrieveReportId(url)
      };
    }
  }

  getRestoreStream() {
    return this.isRestoring$;
  }

  setRestoreStream(val: boolean) {
    this.isRestoring$.next(val);
  }

  performWhenReady(callback: () => void): Promise<void> {
    if (this.isRestoring$.value) {
      this.afterRerouteCallbacks.push(callback);
      return this.afterReroute$.toPromise();
    } else {
      callback();
      return of(null).toPromise();
    }
  }

  private createAfterRerouteSubscription() {
    this.afterReroute$ = this.isRestoring$.pipe(
      skip(1),
      filter(val => !val),
      take(1)
    );
    this.aferRerouteSubscription = this.afterReroute$.subscribe(() => {
      for (const callback of this.afterRerouteCallbacks) {
        callback();
      }
    });
  }

  private retrieveReportId(url: string): string {
    const id = last(url.split('/'));

    return id !== Guid.EMPTY ? id : NavigationRoutes.GetEmptySaved;
  }

  private retrieveModuleName(url: string): string {
    const moduleName = url.split('/')[1];

    return moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
  }

  private retrievePageNumber(url: string): number {
    const urlArr = url.split('/');
    const urlData = {
      moduleName: urlArr[1],
      pageName: urlArr[3]
    };

    const envLookUp = urlData.moduleName + '/report/' + urlData.pageName;
    const envPages = moduleRoutesDictionaries[this.retrieveModuleName(url)];

    for (const [pageKey, pageModel] of Object.entries(envPages)) {
      if (pageModel.url === envLookUp) {
        return pageModel.nameId;
      }
    }

    //  error
    return -1;
  }

  private isRetrivalNeeded(): boolean {
    return this.location.path().includes('/report/');
  }
}
