import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AnamnesisUiModel } from '@models/cardioMRT/ui/anamnesis/anamnesis-ui.model';
import { IndicationFindingUiModel } from '@models/cardioMRT/ui/anamnesis/indication-finding-ui.model';
import { InterventionOrPreOpsFindingUiModel } from '@models/cardioMRT/ui/anamnesis/intervention-or-pre-ops-finding-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { IndicationFindingTypeEnum, InterventionOrPreOpsFindingTypeEnum } from '@enums/cardioMRT';

@Component({
  selector: 'rr-anamnesis-tab',
  templateUrl: './anamnesis-tab.component.html',
  styleUrls: ['./../anamnesis.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class AnamnesisTabComponent implements OnInit, OnDestroy {
  @Input() model: AnamnesisUiModel;
  @Input() indicationFindingsHandler: DynamicComponentHandler<IndicationFindingUiModel>;
  @Input() interventionOrPreOpsFindingsHandler: DynamicComponentHandler<InterventionOrPreOpsFindingUiModel>;

  subscriptions: Subscription[] = [];
  indicationFindingsConfig: FindingColumnConfig;
  interventionOrPreOpsFindingsConfig: FindingColumnConfig;
  indicationFindingType: typeof IndicationFindingTypeEnum;
  interventionOrPreOpsFindingType: typeof InterventionOrPreOpsFindingTypeEnum;

  constructor(private translate: TranslateService) {
    this.configureDropdowns();

    this.indicationFindingType = IndicationFindingTypeEnum;
    this.interventionOrPreOpsFindingType = InterventionOrPreOpsFindingTypeEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private configureDropdowns(): void {
    this.configureIndicationFindingsDropdown();
    this.configureInterventionOrPreOpsFindingsDropdown();
  }

  private configureIndicationFindingsDropdown(): void {
    this.indicationFindingsConfig = new FindingColumnConfig();
    this.indicationFindingsConfig.findingType = 'indicationFindingType';
    this.indicationFindingsConfig.findingColumnIds.findingRRId = 'car_m_020106';
    this.indicationFindingsConfig.findingColumnIds.buttonRRId = 'car_m_020107';
    this.indicationFindingsConfig.itemCount = 7;
  }

  private configureInterventionOrPreOpsFindingsDropdown(): void {
    this.interventionOrPreOpsFindingsConfig = new FindingColumnConfig();
    this.interventionOrPreOpsFindingsConfig.findingType = 'interventionOrPreOpsFindingType';
    this.interventionOrPreOpsFindingsConfig.findingColumnIds.findingRRId = 'car_m_020303';
    this.interventionOrPreOpsFindingsConfig.findingColumnIds.buttonRRId = 'car_m_020304';
    this.interventionOrPreOpsFindingsConfig.itemCount = 7;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.indicationFindingsConfig.placeholder = out;
        this.interventionOrPreOpsFindingsConfig.placeholder = out;
      }),

      this.translate.stream('cardioMRT.anamnesis.findingTypes1.options').subscribe(out => {
        this.indicationFindingsConfig.dropdownValues = Object.values(out);
      }),

      this.translate.stream('cardioMRT.anamnesis.addIndication.value').subscribe(out => {
        this.indicationFindingsConfig.buttonText = out;
      }),

      this.translate.stream('cardioMRT.anamnesis.findingTypes2.options').subscribe(out => {
        this.interventionOrPreOpsFindingsConfig.dropdownValues = Object.values(out);
      }),

      this.translate.stream('cardioMRT.anamnesis.addInterventionPreOPs.value').subscribe(out => {
        this.interventionOrPreOpsFindingsConfig.buttonText = out;
      })
    );
  }

  clearDateOfMRIPreExamination(): void {
    this.model.dateOfMRIPreExamination = new MonthYearModel();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
