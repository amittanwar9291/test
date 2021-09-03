import { FindingBase } from '@models/shared/finding/finding.base';
import { SellarRegionFindingTypeEnum } from '@enums/headMRT/sellar-region/sellar-region-finding-type.enum';
import { SellarRegionDiagnosisTypeEnum } from '@enums/headMRT/sellar-region/sellar-region-diagnosis-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/sellar-region/shape-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class SellarRegionFindingBaseApiModel extends FindingBase {
  findingType: SellarRegionFindingTypeEnum;
  sellarRegionDiagnosisLocalizationType: SellarRegionDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1wSignalType: string;
  t2wSignalType: string;
  flairSignalType: string;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  isNecrosis: boolean;
  isCysts: boolean;
  isSepta: boolean;
  isFluidLevel: boolean;
  isPerifocalEdema: boolean;
  isDuraTailSign: boolean;
  contrastQuantitativeType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastDistributionType: ContrastEnhancementDistributionTypeEnum;

  constructor() {
    super();
    this.findingType = SellarRegionFindingTypeEnum.None;
    this.sellarRegionDiagnosisLocalizationType = SellarRegionDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1wSignalType = 'None';
    this.t2wSignalType = 'None';
    this.flairSignalType = 'None';
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.isNecrosis = false;
    this.isCysts = false;
    this.isSepta = false;
    this.isFluidLevel = false;
    this.isPerifocalEdema = false;
    this.isDuraTailSign = false;
    this.contrastQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
  }
}
