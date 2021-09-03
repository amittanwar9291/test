import { DirectionTypeEnum } from '@enums/shared/direction-type.enum';
import { CysticFibrosisTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/cystic-fibrosis/cystic-fibrosis-type.enum';
import { LungParenchymaFindingTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-finding-type.enum';
import { SuspicionTypeEnum } from '@enums/thoraxMRT/lung-parenchyma/lung-parenchyma-pathology/suspicion-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { LungsFlapsMulticolorLocalizerApi } from '../../../shared/thorax/localizers/lungs-flaps-multicolor-localizer-api';

export class LungParenchymaFindingApiModel extends FindingBase {
  findingType: LungParenchymaFindingTypeEnum;

  // lung-parenchyma-pathology
  lungParenchymaPathologyLocation: string;
  suspicionOfType: SuspicionTypeEnum;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;

  // cystic-fibrosis
  cysticFibrosisType: CysticFibrosisTypeEnum;
  score: number;
  bronchiectasisOrWallThickeningLocalizer: LungsFlapsMulticolorLocalizerApi;
  mucusPlaqueLocalizer: LungsFlapsMulticolorLocalizerApi;
  sacculationOrAbscessLocalizer: LungsFlapsMulticolorLocalizerApi;
  consolidationLocalizer: LungsFlapsMulticolorLocalizerApi;
  otherAbnormalityLocalizer: LungsFlapsMulticolorLocalizerApi;
  functionLocalizer: LungsFlapsMulticolorLocalizerApi;
  isBronchiectasisOrWallThickening: boolean;
  bronchiectasisOrWallThickeningLocation: string;
  isMucusPlaque: boolean;
  mucusPlaqueLocation: string;
  isSacculationOrAbscess: boolean;
  sacculationOrAbscessLocation: string;
  isConsolidation: boolean;
  consolidationLocation: string;
  isPerfusionDisorder: boolean;
  perfusionDisorderLocation: string;
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
    this.lungParenchymaPathologyLocation = 'None';
    this.suspicionOfType = SuspicionTypeEnum.None;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;

    // cystic-fibrosis
    this.cysticFibrosisType = CysticFibrosisTypeEnum.None;
    this.score = null;
    this.bronchiectasisOrWallThickeningLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.mucusPlaqueLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.sacculationOrAbscessLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.consolidationLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.otherAbnormalityLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.functionLocalizer = new LungsFlapsMulticolorLocalizerApi();
    this.isBronchiectasisOrWallThickening = false;
    this.bronchiectasisOrWallThickeningLocation = 'None';
    this.isMucusPlaque = false;
    this.mucusPlaqueLocation = 'None';
    this.isSacculationOrAbscess = false;
    this.sacculationOrAbscessLocation = 'None';
    this.isConsolidation = false;
    this.consolidationLocation = 'None';
    this.isPerfusionDisorder = false;
    this.perfusionDisorderLocation = 'None';
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
