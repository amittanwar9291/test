import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-finding-type.enum';
import { SuspicionTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-pathology/suspicion-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungsFlapsMulticolorLocalizerUi } from '@models/shared/thorax/localizers/lungs-flaps-multicolor-localizer-ui';
export class LungParenchymaFindingUiModel extends FindingBase {
  findingType: LungParenchymaFindingTypeEnum;

  // lung-parenchyma-pathology
  lungParenchymaPathologyLocation: LungsFlapsModel;
  suspicionOfType: SuspicionTypeEnum;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  // cystic-fibrosis
  cysticFibrosisType: CysticFibrosisTypeEnum;
  score: number;
  bronchiectasisOrWallThickeningLocalizer: LungsFlapsMulticolorLocalizerUi;
  mucusPlaqueLocalizer: LungsFlapsMulticolorLocalizerUi;
  sacculationOrAbscessLocalizer: LungsFlapsMulticolorLocalizerUi;
  consolidationLocalizer: LungsFlapsMulticolorLocalizerUi;
  otherAbnormalityLocalizer: LungsFlapsMulticolorLocalizerUi;
  functionLocalizer: LungsFlapsMulticolorLocalizerUi;
  isBronchiectasisOrWallThickening: boolean;
  bronchiectasisOrWallThickeningLocation: LungsFlapsModel;
  isMucusPlaque: boolean;
  mucusPlaqueLocation: LungsFlapsModel;
  isSacculationOrAbscess: boolean;
  sacculationOrAbscessLocation: LungsFlapsModel;
  isConsolidation: boolean;
  consolidationLocation: LungsFlapsModel;
  isPerfusionDisorder: boolean;
  perfusionDisorderLocation: LungsFlapsModel;
  isPleuritis: boolean;
  isPleuritisRight: boolean;
  isPleuritisLeft: boolean;
  isPleuralEffusion: boolean;
  isPleuralEffusionRight: boolean;
  isPleuralEffusionLeft: boolean;
  pleuralEffusionInMm: number;
  isPneumothorax: boolean;
  isPneumothoraxRight: boolean;
  isPneumothoraxLeft: boolean;
  isMediastinalShift: boolean;
  sideType: DirectionTypeEnum;

  constructor() {
    super();
    this.findingType = LungParenchymaFindingTypeEnum.None;

    // lung-parenchyma-pathology
    this.lungParenchymaPathologyLocation = new LungsFlapsModel();
    this.suspicionOfType = SuspicionTypeEnum.None;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    // cystic-fibrosis
    this.cysticFibrosisType = CysticFibrosisTypeEnum.None;
    this.score = null;
    this.bronchiectasisOrWallThickeningLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.mucusPlaqueLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.sacculationOrAbscessLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.consolidationLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.otherAbnormalityLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.functionLocalizer = new LungsFlapsMulticolorLocalizerUi();
    this.isBronchiectasisOrWallThickening = false;
    this.bronchiectasisOrWallThickeningLocation = new LungsFlapsModel();
    this.isMucusPlaque = false;
    this.mucusPlaqueLocation = new LungsFlapsModel();
    this.isSacculationOrAbscess = false;
    this.sacculationOrAbscessLocation = new LungsFlapsModel();
    this.isConsolidation = false;
    this.consolidationLocation = new LungsFlapsModel();
    this.isPerfusionDisorder = false;
    this.perfusionDisorderLocation = new LungsFlapsModel();
    this.isPleuritis = false;
    this.isPleuritisRight = false;
    this.isPleuritisLeft = false;
    this.isPleuralEffusion = false;
    this.isPleuralEffusionRight = false;
    this.isPleuralEffusionLeft = false;
    this.pleuralEffusionInMm = null;
    this.isPneumothorax = false;
    this.isPneumothoraxRight = false;
    this.isPneumothoraxLeft = false;
    this.isMediastinalShift = false;
    this.sideType = DirectionTypeEnum.None;
  }
}
