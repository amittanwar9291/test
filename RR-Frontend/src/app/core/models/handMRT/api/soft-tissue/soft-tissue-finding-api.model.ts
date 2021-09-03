import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { QuantityTypeEnum } from '@enums/handMRT/soft-tissue/quantity-type.enum';

import { SoftTissueDifferentialDiagnosisTypeEnum } from '@enums/handMRT/soft-tissue/soft-tissue-differential-diagnosis-type.enum';
import { SoftTissueFindingBaseApiModel } from './soft-tissue-finding-base-api.model';
import { FormTypeEnum } from '@enums/handMRT/soft-tissue/form-type.enum';
import { HistologyKnownTypeEnum } from '@enums/handMRT/soft-tissue/histology-known-type.enum';

export class SoftTissueFindingApiModel extends SoftTissueFindingBaseApiModel {
  descriptionType: DescriptionTypeEnum;

  handLocationsLocalizer: string;
  handJointsLocalizer: string;
  quantityType: QuantityTypeEnum;
  formType: FormTypeEnum;
  histologyKnownType: HistologyKnownTypeEnum;

  isHemarthros: boolean;
  isHistologyKnown: boolean;
  isCapsuleRupture: boolean;
  isArticularEffusionWithExtraarticularSpread: boolean;
  isLooseBody: boolean;
  isCompressionOfThePosteriorInterosseousNerve: boolean;
  isCutisThickening: boolean;
  isNerves: boolean;
  isVessel: boolean;
  isFascia: boolean;
  isMuscle: boolean;
  isSkin: boolean;
  isBones: boolean;
  isInfiltration: boolean;
  isAlongTendonSheath: boolean;
  isNoDisplacement: boolean;
  isSignalVoids: boolean;
  isNecrosis: boolean;
  isSepta: boolean;
  isDiffusionRestriction: boolean;
  isMoreThanOneLesionSameEntity: boolean;
  isSuspected: boolean;
  isSecondary: boolean;
  maxDiameterInMm: number;
  diameterInMm: number;
  size: number;
  secondPlane: number;
  thirdPlane: number;

  differentialDiagnosis1: SoftTissueDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2: SoftTissueDifferentialDiagnosisTypeEnum;
  differentialDiagnosis3: SoftTissueDifferentialDiagnosisTypeEnum;

  constructor() {
    super();
    this.descriptionType = DescriptionTypeEnum.None;

    this.handLocationsLocalizer = 'None';
    this.handJointsLocalizer = 'None';
    this.quantityType = QuantityTypeEnum.None;
    this.formType = FormTypeEnum.None;
    this.histologyKnownType = HistologyKnownTypeEnum.None;

    this.isHemarthros = false;
    this.isHistologyKnown = false;
    this.isCapsuleRupture = false;
    this.isArticularEffusionWithExtraarticularSpread = false;
    this.isLooseBody = false;
    this.isCompressionOfThePosteriorInterosseousNerve = false;
    this.isCutisThickening = false;
    this.isNerves = false;
    this.isVessel = false;
    this.isFascia = false;
    this.isMuscle = false;
    this.isSkin = false;
    this.isBones = false;
    this.isInfiltration = false;
    this.isAlongTendonSheath = false;
    this.isNoDisplacement = false;
    this.isSignalVoids = false;
    this.isNecrosis = false;
    this.isSepta = false;
    this.isDiffusionRestriction = false;
    this.isMoreThanOneLesionSameEntity = false;
    this.isSecondary = false;
    this.isSuspected = false;
    this.maxDiameterInMm = null;
    this.diameterInMm = null;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;

    this.differentialDiagnosis1 = SoftTissueDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis2 = SoftTissueDifferentialDiagnosisTypeEnum.None;
    this.differentialDiagnosis3 = SoftTissueDifferentialDiagnosisTypeEnum.None;
  }
}
