import { FindingBase } from '@models/shared/finding/finding.base';
import {
  NerveCompressionFindingTypeEnum,
  NeurogeOriginTypeEnum,
  OsseousCauseTypeEnum,
  PathogenesisTypeEnum,
  SecondaryPathogenesisDetailsTypeEnum,
  SoftTissueOriginTypeEnum,
  SynovialOriginTypeEnum
} from '@enums/handMRT/nerve-compression/';

import { PostoperativePathogenesisDetailsTypeEnum } from '@enums/handMRT/nerve-compression/carpal-tunnel-syndrome/postoperative-pathogenesis-details-type.enum';

export class NerveCompressionFindingUiModel extends FindingBase {
  // Common

  findingType: NerveCompressionFindingTypeEnum;
  isProminenceOfTheLigCarpiTransversum: boolean;
  pathogenesisType: PathogenesisTypeEnum;
  secondaryPathogenesisDetailsType: SecondaryPathogenesisDetailsTypeEnum;
  isOsHamatum: boolean;
  osseousCauseType: OsseousCauseTypeEnum;
  isHypertrophicOsteophytes: boolean;
  synovialOriginType: SynovialOriginTypeEnum;
  maxDiameter: number;
  secondLevel: number;
  thirdLevel: number;
  length: number;
  neurogeneOriginType: NeurogeOriginTypeEnum;
  softTissueSpaceRequirementType: SoftTissueOriginTypeEnum;

  // CarpalTunnelSyndrome

  isDistalFlatteningOfTheMedianNerve: boolean;
  isCarpalTunnelEffusion: boolean;
  isThickeningOfTendonSheaths: boolean;
  isIncreasedT2wSignal: boolean;
  isProlapseOfFlexorTendons: boolean;
  isOsTrapezium: boolean;
  isOsTrapezoid: boolean;
  isOsCapitatum: boolean;
  postoperativePathogenesisDetailsType: PostoperativePathogenesisDetailsTypeEnum;
  isCompleteCut: boolean;

  // UlnarTunnelSyndrome

  isUlnarNerveFlattening: boolean;
  isIncreasedT2wSignalUlnarNerve: boolean;
  isProtrusionOfCarpalLigament: boolean;
  isPeritendinousCarpiTendon: boolean;
  isThickeningTendonSheat: boolean;
  isOsTriquetrum: boolean;
  isOsPisiforme: boolean;
  isHypertrophicFormation: boolean;
  isPseudarthrosis: boolean;
  checkCondition: boolean;

  constructor() {
    super();

    // Common

    this.findingType = NerveCompressionFindingTypeEnum.None;
    this.isProminenceOfTheLigCarpiTransversum = false;
    this.pathogenesisType = PathogenesisTypeEnum.None;
    this.secondaryPathogenesisDetailsType = SecondaryPathogenesisDetailsTypeEnum.None;
    this.isOsHamatum = false;
    this.osseousCauseType = OsseousCauseTypeEnum.None;
    this.isHypertrophicOsteophytes = false;
    this.synovialOriginType = SynovialOriginTypeEnum.None;
    this.maxDiameter = null;
    this.secondLevel = null;
    this.thirdLevel = null;
    this.length = null;
    this.neurogeneOriginType = NeurogeOriginTypeEnum.None;
    this.softTissueSpaceRequirementType = SoftTissueOriginTypeEnum.None;

    // CarpalTunnelSyndrome

    this.isDistalFlatteningOfTheMedianNerve = false;
    this.isCarpalTunnelEffusion = false;
    this.isThickeningOfTendonSheaths = false;
    this.isIncreasedT2wSignal = false;
    this.isProlapseOfFlexorTendons = false;
    this.isOsTrapezium = false;
    this.isOsTrapezoid = false;
    this.isOsCapitatum = false;
    this.postoperativePathogenesisDetailsType = PostoperativePathogenesisDetailsTypeEnum.None;
    this.isCompleteCut = false;

    // UlnarTunnelSyndrome

    this.isUlnarNerveFlattening = false;
    this.isIncreasedT2wSignalUlnarNerve = false;
    this.isProtrusionOfCarpalLigament = false;
    this.isPeritendinousCarpiTendon = false;
    this.isThickeningTendonSheat = false;
    this.isOsTriquetrum = false;
    this.isOsPisiforme = false;
    this.isHypertrophicFormation = false;
    this.isPseudarthrosis = false;
    this.checkCondition = false;
  }
}
