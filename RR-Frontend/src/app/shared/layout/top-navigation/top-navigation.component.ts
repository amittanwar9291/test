import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { ReportSessionSignalRService } from '@services/shared/report-session/report-session-signal-r.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { TextReportService } from '@services/shared/report/text-report.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent extends ResizableBaseComponent implements OnInit, OnDestroy {
  navDataSubscription: Subscription;
  navData: NavigationStreamModel;
  pagesCount: number;
  rowPagesCount: number;

  mainContainerWidth: number;

  constructor(
    private navStreamService: AbstractNavigationStreamService,
    private navReRouteService: NavigationSafeRerouteService,
    private changeDetectionService: ChangeDetectionService,
    private slideRequestService: SlideRequestService,
    private textReportService: TextReportService,
    private reportSessionSignalRService: ReportSessionSignalRService,
    private trans: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.reportSessionSignalRService.initialize(this.changeDetectionService, this.slideRequestService, this.textReportService);
    this.navDataSubscription = this.navStreamService.getStream().subscribe((out: NavigationStreamModel) => {
      this.navData = out;
      this.pagesCount = out.pages.length - 1;
      this.rowPagesCount = Math.round(this.pagesCount / 2);

      this.calculateUiDims();
    });
  }

  getLastReportPageName() {
    const navDataLength = this.navData.pages.length;
    return this.navData.pages[navDataLength - 1].pageName;
  }

  calculateUiDims() {
    this.mainContainerWidth = 1 + this.rowPagesCount * 45;
  }

  navToPage(pageNumber: number) {
    if (this.navData.pages[pageNumber - 1].isBlocked) {
      return;
    }

    this.navReRouteService.setPage(pageNumber);
  }

  wasVisited(pageNumber: number) {
    return this.navData.pages[pageNumber].wasModified;
  }

  ngOnDestroy() {
    if (this.navDataSubscription) {
      this.navDataSubscription.unsubscribe();
    }

    this.reportSessionSignalRService.terminate(this.changeDetectionService);
  }
}
