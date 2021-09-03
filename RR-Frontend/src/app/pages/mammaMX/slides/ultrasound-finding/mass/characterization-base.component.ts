import { Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { UltrasoundFindingSubfindingUiModel } from '@models/mammaMX/ui/ultrasound-finding/ultrasound-finding-subfinding-ui.model';

import { MassDiagnosisTypeEnum, HistologicallySecuredTypeEnum } from '@enums/mammaMX/ultrasound-finding';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

export class CharacterizationBaseComponent implements OnInit, OnDestroy {
  @Input() model: UltrasoundFindingSubfindingUiModel;

  subscription: Subscription;
  differentialDiagnosisOptionsList: DropdownModel[];
  differentialDiagnosis2OptionsList: DropdownModel[];
  massDiagnosisType = MassDiagnosisTypeEnum;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscription = this.translateService
      .stream('mammaMX.ultrasoundFinding.differentialDiagnosisList.options')
      .subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptionsList = out;
        this.differentialDiagnosis2OptionsList = out.length > 0 ? out.slice(1, out.length) : out;
      });
  }

  clearDiffDiagnosisBlock(isFirstDiagnosis?: boolean): void {
    if (isFirstDiagnosis) {
      this.model.isHistologicallyConfirmed = false;
      this.model.histologicallySecuredType = HistologicallySecuredTypeEnum.None;
      this.model.isSuspectedOfDifferentialDiagnosis1 = false;
      this.model.differentialDiagnosis2 = MassDiagnosisTypeEnum.None;
    }

    this.model.isSubordinated = false;
  }

  get activeFirstDiffDiagnosis(): MassDiagnosisTypeEnum {
    return this.model.descriptionType === DescriptionTypeEnum.IKnow ? this.model.differentialDiagnosis : this.model.differentialDiagnosis1;
  }

  get isSecondDiffDiagnosisDisabled(): boolean {
    return this.activeFirstDiffDiagnosis === MassDiagnosisTypeEnum.None;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
