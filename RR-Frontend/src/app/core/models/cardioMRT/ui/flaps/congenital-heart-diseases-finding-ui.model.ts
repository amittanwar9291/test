import { FindingBase } from '@models/shared/finding/finding.base';
import {
  CongenitalHeartDiseaseFindingType,
  ArtialSeptalDefectType,
  SinusVenosusType,
  VentricleSeptalDefectType,
  TranspositionOfTheGreatArteriesType,
  OneChamberHeartSingleType,
  AVConnectionType
} from '@enums/cardioMRT/flaps';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class CongenitalHeartDiseasesFindingUiModel extends FindingBase {
  findingType: CongenitalHeartDiseaseFindingType;

  // Common
  isCardiomegaly: boolean;
  isDilatedPulmonaryArtery: boolean;
  isVentricleSeptalDefect: boolean;
  isAtrialSeptalDefect: boolean;
  isPersistentForamenOvale: boolean;

  // AtrialSeptalDefect
  artialSeptalDefectType: ArtialSeptalDefectType;
  sinusVenosusType: SinusVenosusType;
  isRARVIncrease: boolean;

  // VentricleSeptalDefect
  ventricleSeptalDefectType: VentricleSeptalDefectType;
  isLALVIncrease: boolean;

  // TetralogyOfFallot
  isMembranous: boolean;
  isRVOTObstruction: boolean;
  isInfundibularPulmonaryStenosis: boolean;
  isPulmonaryValveStenosis: boolean;
  isRightVentricularHypertrophy: boolean;
  isOverridingAorta: boolean;
  isAortopulmonaryCollateral: boolean;
  isRightSidedAorticArch: boolean;
  isCoronaryArteryAnomalies: boolean;
  isRIVALADOfTheRightCoronarySinus: boolean;
  isPrepulmonary: boolean;
  isPersistentLeftSuperiorVena: boolean;
  isAtrioventricularSeptalDefect: boolean;

  // TranspositionOfTheGreatArteries
  transpositionOfTheGreatArteriesType: TranspositionOfTheGreatArteriesType;
  isPersistentDuctusArteriosus: boolean;

  // OneChamberHeart
  oneChamberHeartSingleType: OneChamberHeartSingleType;
  mainVentricleType: LocationTypeEnum;
  isMitralValveDysplasiaAtresia: boolean;
  isHypoplasticAtreticLVOT: boolean;
  isTranspositionOfTheGreatArteries: boolean;
  isTricuspidalAtresia: boolean;
  isPulmonaryAtresia: boolean;
  avConnectionType: AVConnectionType;

  // TranspositionOfTheGreatArteries
  isTricuspidInsufficiency: boolean;

  constructor() {
    super();

    this.findingType = CongenitalHeartDiseaseFindingType.None;

    // Common
    this.isCardiomegaly = false;
    this.isDilatedPulmonaryArtery = false;
    this.isVentricleSeptalDefect = false;
    this.isAtrialSeptalDefect = false;
    this.isPersistentForamenOvale = false;

    // AtrialSeptalDefect
    this.artialSeptalDefectType = ArtialSeptalDefectType.None;
    this.sinusVenosusType = SinusVenosusType.None;
    this.isRARVIncrease = false;

    // VentricleSeptalDefect
    this.ventricleSeptalDefectType = VentricleSeptalDefectType.None;
    this.isLALVIncrease = false;

    // TetralogyOfFallot
    this.isMembranous = false;
    this.isRVOTObstruction = false;
    this.isInfundibularPulmonaryStenosis = false;
    this.isPulmonaryValveStenosis = false;
    this.isRightVentricularHypertrophy = false;
    this.isOverridingAorta = false;
    this.isAortopulmonaryCollateral = false;
    this.isRightSidedAorticArch = false;
    this.isCoronaryArteryAnomalies = false;
    this.isRIVALADOfTheRightCoronarySinus = false;
    this.isPrepulmonary = false;
    this.isPersistentLeftSuperiorVena = false;
    this.isAtrioventricularSeptalDefect = false;

    // TranspositionOfTheGreatArteries
    this.transpositionOfTheGreatArteriesType = TranspositionOfTheGreatArteriesType.None;
    this.isPersistentDuctusArteriosus = false;

    // OneChamberHeart
    this.oneChamberHeartSingleType = OneChamberHeartSingleType.None;
    this.mainVentricleType = LocationTypeEnum.None;
    this.isMitralValveDysplasiaAtresia = false;
    this.isHypoplasticAtreticLVOT = false;
    this.isTranspositionOfTheGreatArteries = false;
    this.isTricuspidalAtresia = false;
    this.isPulmonaryAtresia = false;
    this.avConnectionType = AVConnectionType.None;

    // TranspositionOfTheGreatArteries
    this.isTricuspidInsufficiency = false;
  }
}
