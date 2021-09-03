import { FindingBase } from '@models/shared/finding/finding.base';
import { BasalNucleiDiagnosisTypeEnum, BasalNucleiFindingTypeEnum } from '@enums/headMRT/basal-nuclei/';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headMRT/basal-nuclei/contrast-enhancement-basal-nuclei-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';

export class BasalNucleiFindingBaseApiModel extends FindingBase {
  findingType: BasalNucleiFindingTypeEnum;

  // Pathology

  // Localization tab
  differentialDiagnosisLocalizationType: BasalNucleiDiagnosisTypeEnum;

  // Characterization I tab
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  t1wSignalType: string;
  t2wSignalType: string;
  flairSignalType: string;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  dwiSignalType: string;
  adcSignalType: string;
  isDiffusionRestriction: boolean;

  // Characterization II tab
  isSignalVoids: boolean;
  contrastEnhancementType: ContrastEnhancementBasalNucleiTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;

  constructor() {
    super();
    this.findingType = BasalNucleiFindingTypeEnum.None;

    // Pathology

    // Localization tab
    this.differentialDiagnosisLocalizationType = BasalNucleiDiagnosisTypeEnum.None;

    // Characterization I tab
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.t1wSignalType = 'None';
    this.t2wSignalType = 'None';
    this.flairSignalType = 'None';
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.dwiSignalType = 'None';
    this.adcSignalType = 'None';
    this.isDiffusionRestriction = false;

    // Characterization II tab
    this.isSignalVoids = false;
    this.contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
  }
}
