import { FindingBase } from '@models/shared/finding/finding.base';
import { FacialSkullDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-diagnosis-type.enum';
import { OrbitaDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/Orbita/orbita-diagnosis-type.enum';
import { ParanasalSinusesDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/ParanasalSinuses/paranasal-sinuses-diagnosis-type.enum';
import { OralCavityDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/OralCavity/oral-cavity-diagnosis-type.enum';
import { SalivaryGlandsDiagnosisTypeEnum } from '@enums/headMRT/facial-skull/SalivaryGlands/salivary-glands-diagnosis-type.enum';
import { FacialSkullFindingTypeEnum } from '@enums/headMRT/facial-skull/facial-skull-finding-type.enum';

import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { MarginTypeEnum } from '@enums/headMRT/common/margin-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { SignalVoidTypeEnum } from '@enums/headMRT/common/signal-void-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';

export class FacialSkullFindingBaseApiModel extends FindingBase {
  findingType: FacialSkullFindingTypeEnum;
  differentialDiagnosis1LocalizationType: FacialSkullDiagnosisTypeEnum;
  orbitaDiagnosis1LocalizationType: OrbitaDiagnosisTypeEnum;
  paranasalSinusesDiagnosis1LocalizationType: ParanasalSinusesDiagnosisTypeEnum;
  oralCavityDiagnosis1LocalizationType: OralCavityDiagnosisTypeEnum;
  salivaryGlandsDiagnosis1LocalizationType: SalivaryGlandsDiagnosisTypeEnum;
  marginType: MarginTypeEnum;
  homogeneityType: HomogeneityTypeEnum;
  shapeType: ShapeTypeEnum;
  t1wSignalType: string;
  t2wSignalType: string;
  flairSignalType: string;
  isSignalVoid: boolean;
  signalVoidType: SignalVoidTypeEnum;
  isDiffusionRestriction: boolean;
  contrastEnhancementType: ContrastEnhancementQuantitativeTypeEnum;
  contrastEnhancementHomogeneityType: HomogeneityTypeEnum;
  contrastDistributionType: ContrastEnhancementDistributionTypeEnum;
  isDisplacement: boolean;
  isCysts: boolean;
  isNecroses: boolean;
  isPepperAndSaltSign: boolean;
  isLocalOsteodestruction: boolean;
  isCompressionBrainstem: boolean;
  isAbscess: boolean;
  isPerifocalEdema: boolean;
  isFossaPterygopalatina: boolean;
  isSignalVoids: boolean;
  isMirrorFormation: boolean;
  isInfiltration: boolean;
  isAdjacentStructuralChangesDueToPressure: boolean;
  isDiffuseWideningOfTheMucosa: boolean;
  isThinningOfTheBonyBoundary: boolean;
  isOsteomyelitis: boolean;
  isOsteomyelitisMandible: boolean;
  isCalcification: boolean;
  isHemorrhage: boolean;
  isCapsule: boolean;
  isPerineuralSpread: boolean;

  isMiddleCranialFossa: boolean;
  isSphenoidBoneMiddle: boolean;
  isPosteriorFossa: boolean;
  isTemporalBonePosterior: boolean;

  isInternalAcousticCanal: boolean;
  isPorusAcusticusInternus: boolean;
  isMiddleEarTympanum: boolean;
  isEpitympanon: boolean;
  isMesotympanum: boolean;
  isHypotympanon: boolean;
  isInnerEarLabyrinth: boolean;
  isMastoid: boolean;
  isAntrum: boolean;
  isForamenMagnum: boolean;

  isOpticNerveIICompartment: boolean;
  isRectusSuperiorMuscle: boolean;
  isRectusInferiorMuscle: boolean;
  isRectusLateralisMuscle: boolean;
  isRectusMedialisMuscle: boolean;
  isObliquusSuperiorMuscle: boolean;
  isMuscleBellyThickening: boolean;
  isTubular: boolean;

  isEethmoidAirCells: boolean;
  isMaxillarySinus: boolean;
  isSphenoidSinus: boolean;
  isInfratemporalFossa: boolean;
  isFrontalSinus: boolean;
  isRetentionCysts: boolean;
  isMucosalPolyps: boolean;

  isOralMucosalSpaceOms: boolean;
  isSublingualSpaceSls: boolean;
  isSubmandibularSpaceSms: boolean;
  isRootOfTheTongueRot: boolean;

  isParotidGland: boolean;
  isSuperficialLobe: boolean;

  constructor() {
    super();
    this.findingType = FacialSkullFindingTypeEnum.None;
    this.differentialDiagnosis1LocalizationType = FacialSkullDiagnosisTypeEnum.None;
    this.orbitaDiagnosis1LocalizationType = OrbitaDiagnosisTypeEnum.None;
    this.paranasalSinusesDiagnosis1LocalizationType = ParanasalSinusesDiagnosisTypeEnum.None;
    this.oralCavityDiagnosis1LocalizationType = OralCavityDiagnosisTypeEnum.None;
    this.salivaryGlandsDiagnosis1LocalizationType = SalivaryGlandsDiagnosisTypeEnum.None;
    this.marginType = MarginTypeEnum.None;
    this.homogeneityType = HomogeneityTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.t1wSignalType = 'None';
    this.t2wSignalType = 'None';
    this.flairSignalType = 'None';
    this.isSignalVoid = false;
    this.signalVoidType = SignalVoidTypeEnum.None;
    this.isDiffusionRestriction = false;
    this.contrastEnhancementType = ContrastEnhancementQuantitativeTypeEnum.None;
    this.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
    this.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
    this.isDisplacement = false;
    this.isCysts = false;
    this.isNecroses = false;
    this.isPepperAndSaltSign = false;
    this.isLocalOsteodestruction = false;
    this.isCompressionBrainstem = false;
    this.isAbscess = false;
    this.isPerifocalEdema = false;
    this.isFossaPterygopalatina = false;
    this.isSignalVoids = false;
    this.isMirrorFormation = false;
    this.isInfiltration = false;
    this.isAdjacentStructuralChangesDueToPressure = false;
    this.isDiffuseWideningOfTheMucosa = false;
    this.isThinningOfTheBonyBoundary = false;
    this.isOsteomyelitis = false;
    this.isOsteomyelitisMandible = false;
    this.isCalcification = false;
    this.isHemorrhage = false;
    this.isCapsule = false;
    this.isPerineuralSpread = false;

    this.isMiddleCranialFossa = false;
    this.isSphenoidBoneMiddle = false;
    this.isPosteriorFossa = false;
    this.isTemporalBonePosterior = false;

    this.isInternalAcousticCanal = false;
    this.isPorusAcusticusInternus = false;
    this.isMiddleEarTympanum = false;
    this.isEpitympanon = false;
    this.isMesotympanum = false;
    this.isHypotympanon = false;
    this.isInnerEarLabyrinth = false;
    this.isMastoid = false;
    this.isAntrum = false;
    this.isForamenMagnum = false;

    this.isOpticNerveIICompartment = false;
    this.isRectusSuperiorMuscle = false;
    this.isRectusInferiorMuscle = false;
    this.isRectusLateralisMuscle = false;
    this.isRectusMedialisMuscle = false;
    this.isObliquusSuperiorMuscle = false;
    this.isMuscleBellyThickening = false;
    this.isTubular = false;

    this.isEethmoidAirCells = false;
    this.isMaxillarySinus = false;
    this.isSphenoidSinus = false;
    this.isInfratemporalFossa = false;
    this.isFrontalSinus = false;
    this.isRetentionCysts = false;
    this.isMucosalPolyps = false;

    this.isOralMucosalSpaceOms = false;
    this.isSublingualSpaceSls = false;
    this.isSubmandibularSpaceSms = false;
    this.isRootOfTheTongueRot = false;

    this.isParotidGland = false;
    this.isSuperficialLobe = false;
  }
}
