import { FindingBase } from '@models/shared/finding/finding.base';
import { LymphNodeStationsTypeEnum } from '@enums/abdomenMRT/lymphatic-system/lymph-nodes';

export class LymphNodeStationsFindingApiModel extends FindingBase {
  findingType: LymphNodeStationsTypeEnum;

  // InternalMammary

  isInternalMammaryRight: boolean;
  isInternalMammaryLeft: boolean;

  // Diaphragmatic

  isDiaphragmaticRight: boolean;
  isDiaphragmaticLeft: boolean;
  isRetrocrural: boolean;
  isInferior: boolean;
  isAnterior: boolean;
  isMiddle: boolean;
  isGastroesophageal: boolean;

  // Gastric

  isGreaterCurvature: boolean;
  isGreaterOmentum: boolean;
  isGastroduodenal: boolean;
  isGastroepiploic: boolean;
  isPyloric: boolean;
  isLesserCurvature: boolean;
  isLesserOmentum: boolean;
  isLeftGastric: boolean;
  isCardioesophageal: boolean;
  isCommonHepaticArtery: boolean;
  isHepatoduodenalLigament: boolean;

  // Pancreatic

  isPeripancreatic: boolean;
  isPancreaticolienal: boolean;
  isPancreaticoduodenal: boolean;

  constructor() {
    super();
    this.findingType = LymphNodeStationsTypeEnum.None;

    // InternalMammary

    this.isInternalMammaryRight = false;
    this.isInternalMammaryLeft = false;

    // Diaphragmatic

    this.isDiaphragmaticRight = false;
    this.isDiaphragmaticLeft = false;
    this.isRetrocrural = false;
    this.isInferior = false;
    this.isAnterior = false;
    this.isMiddle = false;
    this.isGastroesophageal = false;

    // Gastric

    this.isGreaterCurvature = false;
    this.isGreaterOmentum = false;
    this.isGastroduodenal = false;
    this.isGastroepiploic = false;
    this.isPyloric = false;
    this.isLesserCurvature = false;
    this.isLesserOmentum = false;
    this.isLeftGastric = false;
    this.isCardioesophageal = false;
    this.isCommonHepaticArtery = false;
    this.isHepatoduodenalLigament = false;

    // Pancreatic

    this.isPeripancreatic = false;
    this.isPancreaticolienal = false;
    this.isPancreaticoduodenal = false;
  }
}
