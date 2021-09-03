import { Component, EventEmitter, HostListener, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from 'primeng/dynamicdialog';

import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { NavigationSafeRerouteService } from '@services/shared/navigation/navigation-safe-reroute.service';
import { NavigationService } from '@services/shared';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { ReportHttpService } from '@services/shared/navigation/report-http.service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';
import { CancelReportDialogComponent } from '../../dialogs/cancel-report-dialog/cancel-report-dialog.component';
import { CancelMode } from '@enums/shared/cancel-mode.enum';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { ReportUiModel } from '@models/shared/report';
import { PlatformService } from '@services/shared/platform/platform.service';

@Component({
  selector: 'rr-slide-navigation',
  templateUrl: './slide-navigation.component.html',
  styleUrls: ['./slide-navigation.component.scss']
})
export class SlideNavigationComponent implements OnInit, OnDestroy {
  navData: NavigationStreamModel;
  navDataSubscription: Subscription;
  isUserViewer = true;
  isApproved = false;

  @Output() searchClicked = new EventEmitter();

  @HostListener('document:keydown.tab', ['$event'])
  onTabDown(e: KeyboardEvent) {
    this.clickNext();
    e.preventDefault();
  }

  @HostListener('document:keydown.shift.tab', ['$event'])
  onTabShiftDown(e: KeyboardEvent) {
    this.clickPrev();
    e.preventDefault();
  }

  @HostListener('document:keydown.shift.r', ['$event'])
  onShiftRDown(e: KeyboardEvent) {
    const lastPage = this.navData.pages.length;
    this.navigationService.routeToPage(lastPage);
    e.preventDefault();
  }

  constructor(
    private navStreamService: AbstractNavigationStreamService,
    private navReRouteService: NavigationSafeRerouteService,
    private navigationService: NavigationService,
    private reportHttpService: ReportHttpService,
    private userBasicDataService: UserBasicDataService,
    private dialogService: DialogService,
    private navigationReportDataService: NavigationReportDataService,
    private platformService: PlatformService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.navDataSubscription = this.navStreamService.getStream().subscribe((out: NavigationStreamModel) => {
      this.navData = out;
    });

    this.isUserViewer = this.userBasicDataService.userData.value.role === 'Viewer';
    this.setApprovedStatus(this.navigationService.getReportData());
    this.navigationReportDataService.getReportStream().subscribe(report => this.setApprovedStatus(report));
    if (this.platformService.isDesktop()) {
      this.platformService.getElectronRenderer()?.send('register-navigation-shortcuts');
      this.registerHotKeys();
    }
  }

  clickNext() {
    if (!this.navData.isLast) {
      this.navReRouteService.goNextPage();
    }
  }

  registerGoToNextPageByHotkey() {
    this.platformService.getElectronRenderer()?.on('go-to-next-page', () =>
      this.ngZone.run(() => {
        this.clickNext();
      })
    );
  }

  clickPrev() {
    if (!this.navData.isFirst) {
      this.navReRouteService.goPrevPage();
    }
  }

  registerGoToPrevPageByHotkey() {
    this.platformService.getElectronRenderer()?.on('go-to-previous-page', () =>
      this.ngZone.run(() => {
        this.clickPrev();
      })
    );
  }

  registerGoToReportPageByHotkey() {
    this.platformService.getElectronRenderer()?.on('go-to-report-page', () =>
      this.ngZone.run(() => {
        if (!this.navData.isLast) {
          const lastPage = this.navData.pages.length;
          this.navigationService.routeToPage(lastPage);
        }
      })
    );
  }

  registerHotKeys() {
    this.registerGoToNextPageByHotkey();
    this.registerGoToPrevPageByHotkey();
    this.registerGoToReportPageByHotkey();
  }

  stopEditing() {
    const currentReport = this.navigationService.getReportData();
    this.dialogService
      .open(CancelReportDialogComponent, {
        showHeader: false,
        data: { reportId: currentReport.id, examinationType: currentReport.examinationType }
      })
      .onClose.subscribe((cancelMode: CancelMode) => {
        switch (cancelMode) {
          case CancelMode.SaveAndClose:
            this.navReRouteService.close();
            break;
          case CancelMode.CloseAndCancel:
            this.navReRouteService.close(true);
            break;
        }
      });
  }

  closeReport(): void {
    const currentReport = this.navigationService.getReportData();
    this.reportHttpService.updateStatus(currentReport.id, currentReport.examinationType, ReportStatus.Completed).subscribe(() => {
      this.navReRouteService.close();
    });
  }

  openSearchBar(): void {
    this.searchClicked.emit();
  }

  ngOnDestroy() {
    if (this.navDataSubscription) {
      this.navDataSubscription.unsubscribe();
    }
    if (this.platformService.isDesktop()) {
      this.platformService.getElectronRenderer()?.removeAllListeners('go-to-next-page');
      this.platformService.getElectronRenderer()?.removeAllListeners('go-to-previous-page');
      this.platformService.getElectronRenderer()?.removeAllListeners('go-to-report-page');
      this.platformService.getElectronRenderer()?.send('unregister-navigation-shortcuts');
    }
  }

  private setApprovedStatus(report: ReportUiModel) {
    this.isApproved = report && report.status === ReportStatus.Approved;
  }
}
