import { Injectable, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { NavigationStreamPageModel } from '@models/shared/navigation/navigation-stream-page.model';
import { ReportUiModel } from '@models/shared/report';

import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';

@Injectable({
  providedIn: 'root'
})
export class NavigationStreamService extends AbstractNavigationStreamService {
  private stream$: BehaviorSubject<NavigationStreamModel>;

  constructor(private translate: TranslateService) {
    super();

    this.stream$ = new BehaviorSubject<NavigationStreamModel>(new NavigationStreamModel());
  }

  getStream(): Observable<NavigationStreamModel> {
    return this.stream$.asObservable();
  }

  emitStream(reportData: ReportUiModel, pageNumber: number) {
    if (!reportData) {
      throw new Error('Provided report data is empty!');
    } else if (!reportData.pages || reportData.pages.length === 0) {
      throw new Error('Provided has no pages!');
    }

    const streamData = this.initializeStreamData(reportData);

    if (pageNumber < 0 || pageNumber > reportData.totalPageCount + 1) {
      throw new Error('Can\'t set page number to non-existing page!');
    }

    streamData.currentPageNumber = pageNumber;
    streamData.currentPageName = this.getPageNameTranslation(reportData.examinationType, pageNumber);

    streamData.isFirst = this.checkPageFirst(streamData.pages, pageNumber);
    streamData.isLast = this.checkPageLast(streamData.pages, pageNumber);

    this.stream$.next(streamData);
  }

  private initializeStreamData(reportData: ReportUiModel): NavigationStreamModel {
    const streamData = new NavigationStreamModel();

    streamData.pages = new Array<NavigationStreamPageModel>();
    for (let i = 0; i <= reportData.totalPageCount; i++) {
      let streamModel: NavigationStreamPageModel;

      if (reportData.pages.length > i) {
        const page = reportData.pages[i];
        const isActive = reportData.pages.some(x => x.pageNumber === i + 1);

        streamModel = {
          pageName: this.getPageNameTranslation(reportData.examinationType, i + 1),
          pageId: page.pageId,
          isActive,
          isBlocked: page.isBlocked,
          wasModified: page.wasModified
        };
      } else {
        // adds inactive pages to fill out array
        streamModel = {
          pageName: '',
          pageId: null,
          isActive: false,
          isBlocked: true,
          wasModified: false
        };
      }

      streamData.pages.push(streamModel);
    }

    return streamData;
  }

  private getPageNameTranslation(examinationType: string, pageNumber: number): string {
    return 'routing.' + examinationType + '.' + pageNumber;
  }

  private checkPageFirst(pages: Array<NavigationStreamPageModel>, currentPageNumber: number): boolean {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].isActive && i + 1 < currentPageNumber) {
        return false;
      }
    }
    return true;
  }

  private checkPageLast(pages: Array<NavigationStreamPageModel>, currentPageNumber: number): boolean {
    for (let i = currentPageNumber; i < pages.length; i++) {
      if (pages[i].isActive) {
        return false;
      }
    }
    return true;
  }
}
