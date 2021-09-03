import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  BosniakClassificationTypeEnum,
  HistologyKnownTypeEnum,
  KidneysDifferentialDiagnosisTypeEnum,
  LocalizationTypeEnum,
  SideTypeEnum,
  ModalityTypeEnum
} from '@enums/abdomenMRT/kidneys';

@Component({
  selector: 'rr-mass-differential-diagnosis',
  templateUrl: './mass-differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassDifferentialDiagnosisComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() diffDiagnosisOptions1: DropdownModel[];
  @Input() diffDiagnosisOptions2And3: DropdownModel[];
  @Input() bosniakClassificationOptions: DropdownModel[];
  @Input() isDWI: boolean;

  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = KidneysDifferentialDiagnosisTypeEnum;
  histologyKnownType = HistologyKnownTypeEnum;
  sideType = SideTypeEnum;
  localizationType = LocalizationTypeEnum;
  bosniakClassificationType = BosniakClassificationTypeEnum;
  modalityType = ModalityTypeEnum;

  resetDifferentialDiagnosis1DependentModel(): void {
    this.model.isSuspicionOf = false;
    this.model.bosniakClassificationType1 = BosniakClassificationTypeEnum.None;
    this.resetDifferentialDiagnosis2DependentModel();
  }

  resetDifferentialDiagnosis2DependentModel(): void {
    this.model.isSubordinate = false;
    this.model.bosniakClassificationType2 = BosniakClassificationTypeEnum.None;
  }

  resetDifferentialDiagnosis3DependentModel(): void {
    this.model.bosniakClassificationType3 = BosniakClassificationTypeEnum.None;
  }

  isBosniakClassificationDisabled(groupNumber: number): boolean {
    const allowedDifferentialDiagnosis = [
      KidneysDifferentialDiagnosisTypeEnum.UncomplicatedCyst,
      KidneysDifferentialDiagnosisTypeEnum.ParapelvicCysts,
      KidneysDifferentialDiagnosisTypeEnum.SuperInfectedCyst,
      KidneysDifferentialDiagnosisTypeEnum.RupturedCyst,
      KidneysDifferentialDiagnosisTypeEnum.TraumaticCystHematoma,
      KidneysDifferentialDiagnosisTypeEnum.PeripelvicCystsSinusCysts,
      KidneysDifferentialDiagnosisTypeEnum.CysticKidneyDiseaseAdultForm,
      KidneysDifferentialDiagnosisTypeEnum.MulticysticDysplasia,
      KidneysDifferentialDiagnosisTypeEnum.Abscess,
      KidneysDifferentialDiagnosisTypeEnum.RenalCystadenoma,
      KidneysDifferentialDiagnosisTypeEnum.CysticEchinococcosis,
      KidneysDifferentialDiagnosisTypeEnum.RenalAspergillosis,
      KidneysDifferentialDiagnosisTypeEnum.CysticRcc,
      KidneysDifferentialDiagnosisTypeEnum.Mest,
      KidneysDifferentialDiagnosisTypeEnum.CalycealDiverticula,
      KidneysDifferentialDiagnosisTypeEnum.LithiumInducedNephropathy
    ];

    let differentialDiagnosisProperty;
    if (groupNumber === 1 && this.model.descriptionType === DescriptionTypeEnum.IKnow) {
      differentialDiagnosisProperty = `kidneysDifferentialDiagnosisType`;
    } else {
      differentialDiagnosisProperty = `kidneysDifferentialDiagnosisType${groupNumber}`;
    }

    const isParentDiagnosisDisabled = !allowedDifferentialDiagnosis.includes(this.model[differentialDiagnosisProperty]);
    if (isParentDiagnosisDisabled) {
      this.model[`bosniakClassificationType${groupNumber}`] = BosniakClassificationTypeEnum.None;
    }

    return isParentDiagnosisDisabled;
  }

  isBosniak2OrBosniak2F(groupNumber: number): boolean {
    const bosniakProperty = `bosniakClassificationType${groupNumber}`;
    return (
      this.model[bosniakProperty] === BosniakClassificationTypeEnum.Bosniak2MinimalComplex ||
      this.model[bosniakProperty] === BosniakClassificationTypeEnum.Bosniak2FMinimalComplex
    );
  }

  resetBosniakDependent(groupNumber: number): void {
    this.model[`dD${groupNumber}FollowUpMonths`] = null;
    this.model[`dD${groupNumber}ModalityType`] = ModalityTypeEnum.None;
  }
}
