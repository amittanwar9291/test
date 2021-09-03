import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-finding-type.enum';
import { Subscription } from 'rxjs';
import { LungParenchymaHelperService } from '../lung-parenchyma-helper.service';

@Component({
  selector: 'rr-nodule-mass',
  templateUrl: './nodule-mass.component.html',
  styleUrls: ['./nodule-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NoduleMassComponent implements OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  tabIndexSubscription: Subscription;
  currentTabIndex: number;
  lungParenchymaFindingTypeEnum = LungParenchymaFindingTypeEnum;

  constructor(private lungParenchymaHelperService: LungParenchymaHelperService) {
    this.tabIndexSubscription = this.lungParenchymaHelperService.currentTabIndex.subscribe(v => (this.currentTabIndex = v));
  }

  updateCurrentTabIndex(e: number) {
    this.lungParenchymaHelperService.currentTabIndex.next(e);
  }

  ngOnDestroy() {
    this.tabIndexSubscription.unsubscribe();
  }
}
