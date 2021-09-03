import { FindingBase } from '@models/shared/finding/finding.base';
import {
  AdrenalGlandsFindingTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FormTypeEnum,
  GrowthPatternsTypeEnum
} from '@enums/abdomenMRT/adrenal-glands/';
import { FileApiModel } from '@models/shared/uploader/file-api.model';
import { CmEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/adrenal-glands/cm-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class AdrenalGlandsFindingApiModel extends FindingBase {
  findingType: AdrenalGlandsFindingTypeEnum;

  // Common
  isSuspicionOf: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  // IMAGE
  imageFileId: string;
  uploadedImageFile: FileApiModel;
  serialNumber: string;
  pictureNumber: string;

  // Mass
  localizationType: LocationTypeEnum;
  singalT1wType: string;
  singalT2wType: string;
  isSignalDropInPhaseShift: boolean;
  isDiffusionRestriction: boolean;
  isFocalRegressiveChanges: boolean;
  isCalcification: boolean;
  isAtrophyOfTheRemainingAdrenalGland: boolean;
  isFatTissue: boolean;
  isEquivalentToFat: boolean;
  isMacroscopicFat: boolean;
  isIntracytoplasmicFat: boolean;
  isHemorrhage: boolean;
  isNecrosis: boolean;
  isLocoregionalLymphadenopathy: boolean;
  growthPatternsType: GrowthPatternsTypeEnum;
  isKidneys: boolean;
  isDiaphragm: boolean;
  isSupradiaphragmaticSpread: boolean;
  isMusculature: boolean;
  isMidlineCrossing: boolean;
  cmEnhancementQuantitativeType: CmEnhancementQuantitativeTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  differentialDiagnosis1Type: DifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type: DifferentialDiagnosisTypeEnum;
  isSubordinate: boolean;

  // AdrenalHyperplasia
  isRight: boolean;
  isLeft: boolean;
  formType: FormTypeEnum;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  constructor() {
    super();
    this.findingType = AdrenalGlandsFindingTypeEnum.None;

    // Common
    this.isSuspicionOf = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    // IMAGE
    this.imageFileId = null;
    this.uploadedImageFile = null;
    this.serialNumber = '';
    this.pictureNumber = '';

    // Mass
    this.localizationType = LocationTypeEnum.None;
    this.singalT1wType = 'None';
    this.singalT2wType = 'None';
    this.isSignalDropInPhaseShift = false;
    this.isDiffusionRestriction = false;
    this.isFocalRegressiveChanges = false;
    this.isCalcification = false;
    this.isAtrophyOfTheRemainingAdrenalGland = false;
    this.isFatTissue = false;
    this.isEquivalentToFat = false;
    this.isMacroscopicFat = false;
    this.isIntracytoplasmicFat = false;
    this.isHemorrhage = false;
    this.isNecrosis = false;
    this.isLocoregionalLymphadenopathy = false;
    this.growthPatternsType = GrowthPatternsTypeEnum.None;
    this.isKidneys = false;
    this.isDiaphragm = false;
    this.isSupradiaphragmaticSpread = false;
    this.isMusculature = false;
    this.isMidlineCrossing = false;
    this.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.differentialDiagnosis1Type = DifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2Type = DifferentialDiagnosisTypeEnum.None;
    this.isSubordinate = false;

    // AdrenalHyperplasia
    this.isRight = false;
    this.isLeft = false;
    this.formType = FormTypeEnum.None;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
  }
}
