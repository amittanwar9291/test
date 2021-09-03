import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OtherDiseaseTypeEnum, ProgressControlTypeEnum } from '@enums/headMRT/summary/multiple-sclerosis';
import { SummaryFindingTypeEnum } from '@enums/headMRT/summary';

@Component({
  selector: 'rr-multiple-sclerosis',
  templateUrl: './multiple-sclerosis.component.html',
  styleUrls: ['./multiple-sclerosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MultipleSclerosisComponent implements OnInit, OnDestroy {
  @Input() model: SummaryFindingUiModel;
  @Input() isContrastEnhanced;
  differentialDiagnosisOptions: DropdownModel[];
  subscriptions: Subscription[] = [];

  diagnosisFindingType = SummaryFindingTypeEnum;
  progressControlType = ProgressControlTypeEnum;
  otherDiseaseType = OtherDiseaseTypeEnum;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('headMRT.summary.W063.options').subscribe(out => {
        this.differentialDiagnosisOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
