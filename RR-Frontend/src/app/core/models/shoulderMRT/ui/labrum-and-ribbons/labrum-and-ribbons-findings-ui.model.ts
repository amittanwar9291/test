import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { LocalizationLabrumPathology } from '@models/shoulderMRT/ui/localization-labrum-pathology/localization-labrum-pathology.model';

import {
  DetailsType,
  PulleyLesionDetailsType,
  LigGlenoIGHLLocalizationType,
  LongBicepsTendonType,
  DislocationDetailsType,
  DislocationFromSulcusType
} from '@enums/shoulderMRT/labrum-and-ribbons';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LabrumAndRibbonsFindingBaseUi } from './labrum-and-ribbons-finding-base-ui.model';

export class LabrumAndRibbonsFindingUiModel extends LabrumAndRibbonsFindingBaseUi {
  descriptionType: DescriptionTypeEnum;
  referencePicture: ReferencePictureUiModel;

  // labrum
  isLabrumCyst: boolean;
  diameterInMm: number;
  detailsType: DetailsType;
  diagnosis1: string;
  diagnosis2: string;
  isSubordinate: boolean;
  labrumLocation: LocalizationLabrumPathology;

  // ligamenta
  isLigGlenohumeraleSuperior: boolean;
  rupturePulleyLesionAfterHabermayer: PulleyLesionDetailsType;
  isDuplicateMGH: boolean;

  isIGHLPrevious: boolean;
  isIGHLBack: boolean;
  ruptureLigGlenoIGHLLocalization: LigGlenoIGHLLocalizationType;
  isBonyAvulsion: boolean;
  isLigCoracohumerale: boolean;
  isLigCoracohumeraleMedia: boolean;
  isLigCoracohumeraleLateral: boolean;
  isRuptureLigCoracoacromiale: boolean;
  isRuptureLigCoracoclaviculare: boolean;
  isRuptureLigHumeriTransversum: boolean;
  isRuptureLigSemicirculareHumeri: boolean;

  isSGHL: boolean;
  isMissingOrHypoPlasticMGHL: boolean;
  isBufordComplex: boolean;
  isIGHL: boolean;
  isThickeningLigCoracohumerale: boolean;
  isThickeningLigCoracoacromiale: boolean;
  isThickeningLigCoracoclaviculare: boolean;
  isThickeningLigHumeriTransversum: boolean;
  isThickeningLigSemicirculareHumeri: boolean;

  // biceps-tendon
  longBicepsTendonType: LongBicepsTendonType;
  retractionInMm: number;
  isRetractedTendonStumpBicepsAnchor: boolean;
  isIntraArticularEntrapment: boolean;
  isThinningOutDegeneration: boolean;
  isThickeningMoreThan5Degeneration: boolean;
  isCystDegeneration: boolean;
  cystDiameterInMm: number;
  isIncreasedSignalOnT2wOrPdAndT1w: boolean;
  isTendinitisLiquidInTendonSheath: boolean;
  isTendinitisThickening: boolean;
  isTendinitisThinningOut: boolean;
  isTendinitisT2wSignalIncrease: boolean;
  pulleyLesionBiceps: PulleyLesionDetailsType;
  dislocationDetailsType: DislocationDetailsType;
  dislocationFromSulcusType: DislocationFromSulcusType;

  constructor() {
    super();

    this.descriptionType = DescriptionTypeEnum.None;
    this.referencePicture = new ReferencePictureUiModel();
    this.labrumLocation = new LocalizationLabrumPathology();

    // labrum
    this.isLabrumCyst = false;
    this.diameterInMm = null;
    this.detailsType = DetailsType.None;
    this.diagnosis1 = 'None';
    this.diagnosis2 = 'None';
    this.isSubordinate = false;

    // ligamenta
    this.isLigGlenohumeraleSuperior = false;
    this.rupturePulleyLesionAfterHabermayer = PulleyLesionDetailsType.None;
    this.isDuplicateMGH = false;
    this.isIGHLPrevious = false;
    this.isIGHLBack = false;
    this.ruptureLigGlenoIGHLLocalization = LigGlenoIGHLLocalizationType.None;
    this.isBonyAvulsion = false;
    this.isLigCoracohumerale = false;
    this.isLigCoracohumeraleMedia = false;
    this.isLigCoracohumeraleLateral = false;
    this.isRuptureLigCoracoacromiale = false;
    this.isRuptureLigCoracoclaviculare = false;
    this.isRuptureLigHumeriTransversum = false;
    this.isRuptureLigSemicirculareHumeri = false;
    this.isSGHL = false;
    this.isMissingOrHypoPlasticMGHL = false;
    this.isMGHL = false;
    this.isBufordComplex = false;
    this.isIGHL = false;
    this.isThickeningLigCoracohumerale = false;
    this.isThickeningLigCoracoacromiale = false;
    this.isThickeningLigCoracoclaviculare = false;
    this.isThickeningLigHumeriTransversum = false;
    this.isThickeningLigSemicirculareHumeri = false;

    // biceps-tendon
    this.longBicepsTendonType = LongBicepsTendonType.None;
    this.retractionInMm = null;
    this.isRetractedTendonStumpBicepsAnchor = false;
    this.isIntraArticularEntrapment = false;
    this.isThinningOutDegeneration = false;
    this.isThickeningMoreThan5Degeneration = false;
    this.isCystDegeneration = false;
    this.cystDiameterInMm = null;
    this.isIncreasedSignalOnT2wOrPdAndT1w = false;
    this.isTendinitisLiquidInTendonSheath = false;
    this.isTendinitisThickening = false;
    this.isTendinitisThinningOut = false;
    this.isTendinitisT2wSignalIncrease = false;
    this.pulleyLesionBiceps = PulleyLesionDetailsType.None;
    this.dislocationDetailsType = DislocationDetailsType.None;
    this.dislocationFromSulcusType = DislocationFromSulcusType.None;
  }
}
