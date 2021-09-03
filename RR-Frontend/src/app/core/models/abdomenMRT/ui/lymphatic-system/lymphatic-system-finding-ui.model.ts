import { FindingBase } from '@models/shared/finding/finding.base';
import { LymphaticSystemFindingTypeEnum } from '@enums/abdomenMRT/lymphatic-system/';

import {
  EvaluationTypeEnum,
  FormTypeEnum,
  LocalizationTypeEnum,
  LymphaticSystemDifferentialDiagnosisTypeEnum
} from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { CMEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/cmenhancement-quantitative-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class LymphaticSystemFindingUiModel extends FindingBase {
  findingType: LymphaticSystemFindingTypeEnum;

  // LymphNode

  isEpiphrenic: boolean;
  localizationType: LocalizationTypeEnum;
  lymphNodeStations: LymphNodeStationsFindingUiModel[];
  maxShortAxisDiameterSad: number;
  isLymphNodeBulk: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  spineLocation: SpineLocation;
  evaluationType: EvaluationTypeEnum;
  isSize: boolean;
  isDiffusionRestriction: boolean;
  isContrastEnhancement: boolean;
  isLocation: boolean;
  isNumber: boolean;
  isFattyHilum: boolean;
  isIncreased: boolean;
  isPathologicDiffusionRestriction: boolean;
  isFattyTissueInTheLnHilus: boolean;
  isFattyInfiltration: boolean;
  isNecrosis: boolean;
  isCysticTransformation: boolean;
  isCalcification: boolean;
  formType: FormTypeEnum;
  isSandwichSign: boolean;
  isAorticEncasement: boolean;
  isPortalVeinEncasement: boolean;
  cMEnhancementQuantitativeType: CMEnhancementQuantitativeTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  differentialDiagnosisType: LymphaticSystemDifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;

  // ImageFileUpload
  referencePicture: ReferencePictureUiModel;
  constructor() {
    super();
    this.findingType = LymphaticSystemFindingTypeEnum.None;

    // LymphNode

    this.isEpiphrenic = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.lymphNodeStations = [new LymphNodeStationsFindingUiModel()];
    this.maxShortAxisDiameterSad = null;
    this.isLymphNodeBulk = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.spineLocation = new SpineLocation();
    this.evaluationType = EvaluationTypeEnum.None;
    this.isSize = false;
    this.isDiffusionRestriction = false;
    this.isContrastEnhancement = false;
    this.isLocation = false;
    this.isNumber = false;
    this.isFattyHilum = false;
    this.isIncreased = false;
    this.isPathologicDiffusionRestriction = false;
    this.isFattyTissueInTheLnHilus = false;
    this.isFattyInfiltration = false;
    this.isNecrosis = false;
    this.isCysticTransformation = false;
    this.isCalcification = false;
    this.formType = FormTypeEnum.None;
    this.isSandwichSign = false;
    this.isAorticEncasement = false;
    this.isPortalVeinEncasement = false;
    this.cMEnhancementQuantitativeType = CMEnhancementQuantitativeTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.differentialDiagnosisType = LymphaticSystemDifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;

    // ImageFileUpload
    this.referencePicture = new ReferencePictureUiModel();
  }
}
