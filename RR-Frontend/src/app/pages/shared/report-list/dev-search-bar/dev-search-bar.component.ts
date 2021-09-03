import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '@environments/environment';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';

@Component({
  selector: 'rr-dev-search-bar',
  templateUrl: './dev-search-bar.component.html',
  styleUrls: ['./dev-search-bar.component.scss']
})
export class DevSearchBarComponent implements OnDestroy {
  private subscription: Subscription = new Subscription();

  @Output() searchReport = new EventEmitter();
  searchedReportId: string;
  hideReportSearchBar: boolean;

  constructor(private externalCommunicationService: ReportListExternalCommunicationService) {
    this.subscription.add(
      this.externalCommunicationService.hideReportSearchBarStream$.subscribe(isHidden => (this.hideReportSearchBar = isHidden))
    );
  }

  isOnDevelopmentEnvironment() {
    return !environment.production || window.location.href.includes('rrtestint') || window.location.href.includes('rrtestdocker');
  }

  requestReportSearch(): void {
    if (this.searchedReportId) {
      this.searchReport.emit(this.searchedReportId);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
