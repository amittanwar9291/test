import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LungParenchymaDiagnosisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-diagnosis-type.enum';
import { LungSectionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-section-type.enum';
import { PeculiaritySegmentatelectasisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/peculiarity-segmentatelectasis-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { LungParenchymaFormTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-form-type.enum';
import { PulmonaryInfarctionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/pulmonary-infarction-type.enum';
import { LungParenchymaFindingBaseUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-base-ui.model';

export class LungParenchymaFindingUiModel extends LungParenchymaFindingBaseUiModel {
  descriptionType: DescriptionTypeEnum;
  measuredValuesMaxDiameterAxialInMm: number;
  measuredValuesVolumeInMm3: number;
  differentialDiagnosis01: LungParenchymaDiagnosisTypeEnum;
  isSuspected: boolean;
  differentialDiagnosis02: LungParenchymaDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis03: LungParenchymaDiagnosisTypeEnum;
  lungSectionType: LungSectionTypeEnum;
  peculiaritySegmentatelectasisType: PeculiaritySegmentatelectasisTypeEnum;
  sideType: LocationTypeEnum;
  formType: LungParenchymaFormTypeEnum;
  pulmonaryInfarctionType: PulmonaryInfarctionTypeEnum;
  isAbsentBronchopneumogram: boolean;
  isBubblyConsolidation: boolean;
  isDrecreased: boolean;

  constructor() {
    super();

    this.descriptionType = DescriptionTypeEnum.None;
    this.measuredValuesMaxDiameterAxialInMm = null;
    this.measuredValuesVolumeInMm3 = null;
    this.differentialDiagnosis01 = LungParenchymaDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.differentialDiagnosis02 = LungParenchymaDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis03 = LungParenchymaDiagnosisTypeEnum.None;
    this.lungSectionType = LungSectionTypeEnum.None;
    this.peculiaritySegmentatelectasisType = PeculiaritySegmentatelectasisTypeEnum.None;
    this.sideType = LocationTypeEnum.None;
    this.formType = LungParenchymaFormTypeEnum.None;
    this.pulmonaryInfarctionType = PulmonaryInfarctionTypeEnum.None;
    this.isAbsentBronchopneumogram = false;
    this.isBubblyConsolidation = false;
    this.isDrecreased = false;
  }
}
