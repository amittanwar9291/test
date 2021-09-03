import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DominantFindingTypeEnum } from '@enums/headMRT/basal-nuclei/dominant-finding-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { BasalNucleiFindingUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-finding-ui.model';
import { Subscription } from 'rxjs';
import { BasalNucleiHelperService } from '../../basal-nuclei-helper.service';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { BasalNucleiDiagnosisTypeEnum } from '@enums/headMRT/basal-nuclei';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { DiffusionRestrictionDiagnoses, T1wSignalEnhancementDiagnoses, T2wSignalEnhancementDiagnoses } from '../pathology-diagnosis-groups';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: BasalNucleiFindingUiModel;

  isWeightingTypeDWISubscription: Subscription;
  isWeightingTypeDWI: boolean;

  constructor(private basalNucleiHelperService: BasalNucleiHelperService) {
    this.isWeightingTypeDWISubscription = this.basalNucleiHelperService.isWeightingTypeDWI.subscribe(
      value => (this.isWeightingTypeDWI = value)
    );
  }

  marginType = MarginTypeEnum;
  homogeneityType = HomogeneityTypeEnum;
  shapeType = ShapeTypeEnum;
  signalVoidType = SignalVoidTypeEnum;
  dominantFindingType = DominantFindingTypeEnum;

  resetBothPlanes(): void {
    if (!this.model.size) {
      this.model.size2ndPlane = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.size2ndPlane) {
      this.model.size3rdPlane = null;
    }
  }

  resetDominantSpecificDiagnosis() {
    switch (this.model.dominantFindingType) {
      case DominantFindingTypeEnum.DiffusionRestriction:
        this.resetDiagnosisIfNotValid(DiffusionRestrictionDiagnoses);
        break;
      case DominantFindingTypeEnum.T1wSignalEnhancement:
        this.resetDiagnosisIfNotValid(T1wSignalEnhancementDiagnoses);
        break;
      case DominantFindingTypeEnum.T2wSignalEnhancement:
        this.resetDiagnosisIfNotValid(T2wSignalEnhancementDiagnoses);
        break;
    }
  }

  private resetDiagnosisIfNotValid(validDiagnoses: BasalNucleiDiagnosisTypeEnum[]) {
    const isNotValid = (diagnosis: BasalNucleiDiagnosisTypeEnum): boolean => !validDiagnoses.includes(diagnosis);

    if (isNotValid(this.model.differentialDiagnosisLocalizationType) && isNotValid(this.model.differentialDiagnosisType1)) {
      this.resetDD01();
    } else if (isNotValid(this.model.differentialDiagnosisType2)) {
      this.resetDD02();
    } else if (isNotValid(this.model.differentialDiagnosisType3)) {
      this.resetDD03();
    }
  }

  private resetDD01() {
    // IKnow
    this.model.differentialDiagnosisLocalizationType = BasalNucleiDiagnosisTypeEnum.None;
    this.model.isHistologyKnown = false;
    this.model.knownHistologyType = HistologyKnownTypeEnum.None;

    // IDescribe
    this.model.differentialDiagnosisType1 = BasalNucleiDiagnosisTypeEnum.None;
    this.model.isSuspicionOf = false;

    this.resetDD02();
  }

  private resetDD02() {
    this.model.differentialDiagnosisType2 = BasalNucleiDiagnosisTypeEnum.None;
    this.model.isSubordinate = false;
    this.resetDD03();
  }

  private resetDD03() {
    this.model.differentialDiagnosisType3 = BasalNucleiDiagnosisTypeEnum.None;
  }
}
