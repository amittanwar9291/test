import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { values } from 'lodash';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { HeartValveFindingType, LVOTObstructionType } from '@enums/cardioMRT/flaps';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

interface IButtonFindingDropdownModel {
  button: string;
  findings: FindingDropdownModel[];
}

@Component({
  selector: 'rr-heart-valves',
  templateUrl: './heart-valves.component.html',
  styleUrls: ['../flaps.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HeartValvesComponent implements OnInit, OnDestroy {
  @Input() model: FlapsUiModel;
  @Input() heartValveFindingsHandler: DynamicComponentHandler<HeartValvesFindingUiModel>;

  subscriptions: Subscription[] = [];
  stenosisTypeList: DropdownModel[];
  insufficiencyTypeList: DropdownModel[];
  classificationTypeList: DropdownModel[];
  classificationPhenotypeList: DropdownModel[];
  dropdownTranslationBits: DropdownModel[];
  heartValveFindingsConfig: FindingColumnConfig;

  findingType: typeof HeartValveFindingType;
  lvotObstructionType: typeof LVOTObstructionType;
  areFindings: typeof AreFindingsEnum;

  constructor(private translate: TranslateService) {
    this.configureHeartValveFindingsDropdown();

    this.findingType = HeartValveFindingType;
    this.lvotObstructionType = LVOTObstructionType;
    this.areFindings = AreFindingsEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private configureHeartValveFindingsDropdown(): void {
    this.heartValveFindingsConfig = new FindingColumnConfig();
    this.heartValveFindingsConfig.findingType = 'findingType';
    this.heartValveFindingsConfig.findingColumnIds.findingRRId = 'car_m_040222';
    this.heartValveFindingsConfig.findingColumnIds.buttonRRId = 'car_m_040223';
    this.heartValveFindingsConfig.itemCount = 7;
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.heartValveFindingsConfig.placeholder = out;
      }),

      this.translate.stream('cardioMRT.flaps.findingTypes1.options').subscribe(out => {
        this.heartValveFindingsConfig.dropdownValues = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.addHeartValve.value').subscribe(out => {
        this.heartValveFindingsConfig.buttonText = out;
      }),

      this.translate.stream('cardioMRT.flaps.stenosisTypeList.options').subscribe((out: DropdownModel[]) => {
        this.stenosisTypeList = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.insufficiencyTypeList.options').subscribe((out: DropdownModel[]) => {
        this.insufficiencyTypeList = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.classificationTypeList.options').subscribe((out: DropdownModel[]) => {
        this.classificationTypeList = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.classificationPhenotypeList.options').subscribe((out: DropdownModel[]) => {
        this.classificationPhenotypeList = Object.values(out);
      }),

      this.translate.stream('cardioMRT.flaps.translationBits').subscribe((out: DropdownModel[]) => {
        this.dropdownTranslationBits = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
