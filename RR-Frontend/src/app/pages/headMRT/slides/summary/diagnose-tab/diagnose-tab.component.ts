import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SummaryFindingUiModel } from '@models/headMRT/ui/summary/summary-finding-ui.model';
import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SummaryFindingTypeEnum } from '@enums/headMRT/summary';

@Component({
  selector: 'rr-diagnose-tab',
  templateUrl: './diagnose-tab.component.html',
  styleUrls: ['./diagnose-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiagnoseTabComponent implements OnInit, OnDestroy {
  @Input() model: SummaryUiModel;
  @Input() summaryFindingHandler: DynamicComponentHandler<SummaryFindingUiModel>;
  @Input() isContrastEnhanced;
  @Input() findingDropdownConfig: FindingColumnConfig;
  subscriptions: Subscription[] = [];

  summaryFindingTypeEnum = SummaryFindingTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  isFindingType(type: SummaryFindingTypeEnum): boolean {
    return this.summaryFindingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.summary.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.summary.addDiagnosis.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
