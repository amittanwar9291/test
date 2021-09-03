import { Component, OnInit, OnDestroy, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { InfoIconConfig, InfoIconService } from '@services/shared/info-icon/info-icon.service';

import { NavigationStreamModel } from '@models/shared/navigation/navigation-stream.model';
import { AbstractNavigationStreamService } from '@abstractions/abstract-classes/navigation/navigation-stream';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-slide-header',
  templateUrl: './slide-header.component.html',
  styleUrls: ['./slide-header.component.scss']
})
export class SlideHeaderComponent implements OnInit, AfterContentInit, OnDestroy {
  navDataSubscription: Subscription;
  navData: NavigationStreamModel;

  reportPageId: number;

  infoIconConfig = new InfoIconConfig();

  @Output() searchClicked = new EventEmitter();

  constructor(
    private navStreamService: AbstractNavigationStreamService,
    private infoIconService: InfoIconService,
    private trans: TranslateService
  ) {}

  ngOnInit() {
    this.navDataSubscription = this.navStreamService.getStream().subscribe((out: NavigationStreamModel) => {
      this.navData = out;
      this.reportPageId = this.navData.pages.length;
    });
  }

  ngAfterContentInit(): void {
    this.infoIconService.infoIconConfig$.subscribe(pdfConfig => (this.infoIconConfig = pdfConfig));
  }

  onSearchClicked(): void {
    this.searchClicked.emit();
  }

  ngOnDestroy() {
    if (this.navDataSubscription) {
      this.navDataSubscription.unsubscribe();
    }
  }

  isLastPage(): boolean {
    return this.navData.currentPageNumber === this.reportPageId;
  }
}
