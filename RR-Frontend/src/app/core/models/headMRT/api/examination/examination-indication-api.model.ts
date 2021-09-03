import { FindingBase } from '@models/shared/finding/finding.base';
import { ExaminationIndicationFindingTypeEnum } from '@enums/headMRT/examination/examination-indication-finding-type.enum';
import { IschemiaIntracranialHemorrhageTypeEnum } from '@enums/headMRT/examination/ischemia-intracranial-hemorrhage-type.enum';
import { DetailsTypeEnum } from '@enums/headMRT/examination/details-type.enum';
import { IntracranialHemorrhageTypeEnum } from '@enums/headMRT/examination/intracranial-hemorrhage-type.enum';
import { HuntHessScaleTypeEnum } from '@enums/headMRT/examination/hunt-hess-scale-type.enum';

export class ExaminationIndicationApiModel extends FindingBase {
  findingType: ExaminationIndicationFindingTypeEnum;

  // common
  ischemiaIntracranialHemorrhageType: IschemiaIntracranialHemorrhageTypeEnum;
  detailsType: DetailsTypeEnum;

  // IschemiaIntracranialHemorrhage
  nihssScore: number;
  aspectScore: number;
  hoursAfterSymptomOnset: number;
  isWakeUpStroke: boolean;
  intracranialHemorrhageType: IntracranialHemorrhageTypeEnum;
  huntHessScaleType: HuntHessScaleTypeEnum;

  // Inflammation AutoimmuneDisease Demyelination
  isMultipleSclerosis: boolean;
  isVasculitis: boolean;

  // Seizure
  month: number;
  year: number;
  isRefractoryEpilepsy: boolean;

  // Trauma
  isIntracranialHemorrhage: boolean;
  isMinorTrauma: boolean;
  isPolytrauma: boolean;
  isHighVelocityTrauma: boolean;
  glasgowComaScale: number;
  constructor() {
    super();
    this.findingType = ExaminationIndicationFindingTypeEnum.None;

    // common
    this.ischemiaIntracranialHemorrhageType = IschemiaIntracranialHemorrhageTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;

    // IschemiaIntracranialHemorrhage
    this.nihssScore = null;
    this.aspectScore = null;
    this.hoursAfterSymptomOnset = null;
    this.isWakeUpStroke = false;
    this.intracranialHemorrhageType = IntracranialHemorrhageTypeEnum.None;
    this.huntHessScaleType = HuntHessScaleTypeEnum.None;

    // Inflammation AutoimmuneDisease Demyelination
    this.isMultipleSclerosis = false;
    this.isVasculitis = false;

    // Seizure
    this.month = 0;
    this.year = 0;
    this.isRefractoryEpilepsy = false;

    // Trauma
    this.isIntracranialHemorrhage = false;
    this.isMinorTrauma = false;
    this.isPolytrauma = false;
    this.isHighVelocityTrauma = false;
    this.glasgowComaScale = null;
  }
}
