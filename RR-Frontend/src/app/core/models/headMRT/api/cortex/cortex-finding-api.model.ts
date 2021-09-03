import { ClassificationFazekasTypeEnum, CortexDifferentialDiagnosisTypeEnum, CorticalThinningTypeEnum } from '@enums/headMRT/cortex/common';

import { ClassificationAdamsTypeEnum } from '@enums/headMRT/cortex/diffuse';

import { ClassificationWHOTypeEnum, DetailsTypeEnum, LocalizationTypeEnum } from '@enums/headMRT/cortex/focal';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { CortexFindingBaseApiModel } from './cortex-finding-base-api.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HistologyKnownTypeEnum } from '@enums/headMRT/common/histology-known-type.enum';
import { ShapeTypeEnum } from '@enums/headMRT/common/shape-type.enum';
import { RegionTypeEnum } from '@enums/headMRT/common/region-type.enum';

export class CortexFindingApiModel extends CortexFindingBaseApiModel {
  // COMMON

  descriptionType: DescriptionTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  localizationFazekasScale: ClassificationFazekasTypeEnum;
  cortexLocations: string;
  isPraecuneus: boolean;
  isCuneus: boolean;
  isLingualGyrus: boolean;
  isGyrusTemporalisTransversus: boolean;
  isLateralOccipitotemporalGyrus: boolean;
  isParsIntermedia: boolean;
  isSuperiorCerebellarPeduncle: boolean;
  isMiddleCerebellarPeduncle: boolean;
  isInferiorCerebellarPeduncle: boolean;
  isCortex: boolean;
  isWhiteMatter: boolean;
  localizationType: LocalizationTypeEnum;
  detailsType: DetailsTypeEnum;
  shapeType: ShapeTypeEnum;
  isCalcification: boolean;
  isConfluent: boolean;
  isInfiltration: boolean;
  isDescentOfTheCerebellarTonsils: boolean;
  isHydrocephalus: boolean;
  isMidlineShift: boolean;
  sideType: SideTypeEnum;
  midlineShift: number;
  isHerniation: boolean;
  regionType: RegionTypeEnum;
  isCorticalThinning: boolean;
  corticalThinningType: CorticalThinningTypeEnum;
  isMesiotemporalSclerosis: boolean;
  isCorticalTuber: boolean;
  isSubependymalNodules: boolean;
  isCalcified: boolean;
  isAbscess: boolean;
  maxDiameter: number;
  isVentricularHerniation: boolean;
  isLateralVentricleRight: boolean;
  isLateralVentricleLeft: boolean;
  is3RdVentricle: boolean;
  differentialDiagnosisType1: CortexDifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  classificationFazekas1: ClassificationFazekasTypeEnum;
  differentialDiagnosisType2: CortexDifferentialDiagnosisTypeEnum;
  isSubordinate: boolean;
  classificationFazekas2: ClassificationFazekasTypeEnum;
  differentialDiagnosisType3: CortexDifferentialDiagnosisTypeEnum;
  classificationFazekas3: ClassificationFazekasTypeEnum;
  isRight: boolean;
  isLeft: boolean;
  isFrontal: boolean;
  isTemporal: boolean;
  isParietal: boolean;
  isOccipital: boolean;
  isInfratentorial: boolean;

  // FOCAL

  localizationWHOClassification: ClassificationWHOTypeEnum;
  size: number;
  size2ndPlane: number;
  size3rdPlane: number;
  isSubstanceDefect: boolean;
  isFat: boolean;
  isCapsule: boolean;
  isSepta: boolean;
  classificationWHO1: ClassificationWHOTypeEnum;
  classificationWHO2: ClassificationWHOTypeEnum;
  classificationWHO3: ClassificationWHOTypeEnum;

  // DIFFUSE

  localizationModifiedClassificationAdams: ClassificationAdamsTypeEnum;
  isMicroBleeding: boolean;
  isHemorrhagicLacunae: boolean;
  isAtrophy: boolean;
  classificationAdams1: ClassificationAdamsTypeEnum;
  classificationAdams2: ClassificationAdamsTypeEnum;
  classificationAdams3: ClassificationAdamsTypeEnum;
  constructor() {
    super();

    // COMMON

    this.descriptionType = DescriptionTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.localizationFazekasScale = ClassificationFazekasTypeEnum.None;
    this.cortexLocations = 'None';
    this.isPraecuneus = false;
    this.isCuneus = false;
    this.isLingualGyrus = false;
    this.isGyrusTemporalisTransversus = false;
    this.isLateralOccipitotemporalGyrus = false;
    this.isParsIntermedia = false;
    this.isSuperiorCerebellarPeduncle = false;
    this.isMiddleCerebellarPeduncle = false;
    this.isInferiorCerebellarPeduncle = false;
    this.isCortex = false;
    this.isWhiteMatter = false;
    this.localizationType = LocalizationTypeEnum.None;
    this.detailsType = DetailsTypeEnum.None;
    this.shapeType = ShapeTypeEnum.None;
    this.isCalcification = false;
    this.isConfluent = false;
    this.isInfiltration = false;
    this.isDescentOfTheCerebellarTonsils = false;
    this.isHydrocephalus = false;
    this.isMidlineShift = false;
    this.sideType = SideTypeEnum.None;
    this.midlineShift = null;
    this.isHerniation = false;
    this.regionType = RegionTypeEnum.None;
    this.isCorticalThinning = false;
    this.corticalThinningType = CorticalThinningTypeEnum.None;
    this.isMesiotemporalSclerosis = false;
    this.isCorticalTuber = false;
    this.isSubependymalNodules = false;
    this.isCalcified = false;
    this.isAbscess = false;
    this.maxDiameter = null;
    this.isVentricularHerniation = false;
    this.isLateralVentricleRight = false;
    this.isLateralVentricleLeft = false;
    this.is3RdVentricle = false;
    this.differentialDiagnosisType1 = CortexDifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.classificationFazekas1 = ClassificationFazekasTypeEnum.None;
    this.differentialDiagnosisType2 = CortexDifferentialDiagnosisTypeEnum.None;
    this.isSubordinate = false;
    this.classificationFazekas2 = ClassificationFazekasTypeEnum.None;
    this.differentialDiagnosisType3 = CortexDifferentialDiagnosisTypeEnum.None;
    this.classificationFazekas3 = ClassificationFazekasTypeEnum.None;
    this.isRight = false;
    this.isLeft = false;
    this.isFrontal = false;
    this.isTemporal = false;
    this.isParietal = false;
    this.isOccipital = false;
    this.isInfratentorial = false;

    // FOCAL

    this.localizationWHOClassification = ClassificationWHOTypeEnum.None;
    this.size = null;
    this.size2ndPlane = null;
    this.size3rdPlane = null;
    this.isSubstanceDefect = false;
    this.isFat = false;
    this.isCapsule = false;
    this.isSepta = false;
    this.classificationWHO1 = ClassificationWHOTypeEnum.None;
    this.classificationWHO2 = ClassificationWHOTypeEnum.None;
    this.classificationWHO3 = ClassificationWHOTypeEnum.None;

    // DIFFUSE

    this.localizationModifiedClassificationAdams = ClassificationAdamsTypeEnum.None;
    this.isMicroBleeding = false;
    this.isHemorrhagicLacunae = false;
    this.isAtrophy = false;
    this.classificationAdams1 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams2 = ClassificationAdamsTypeEnum.None;
    this.classificationAdams3 = ClassificationAdamsTypeEnum.None;
  }
}
