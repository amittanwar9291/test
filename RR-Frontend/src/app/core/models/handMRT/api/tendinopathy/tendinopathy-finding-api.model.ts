import { FindingBase } from '@models/shared/finding/finding.base';
import { PathologyTypeEnum } from '@enums/handMRT/tendinopathy/pathology-type.enum';
import { TendovaginitisTypeEnum } from '@enums/handMRT/tendinopathy/tendovaginitis-type.enum';
import { TendiopathyFindingTypeEnum } from '@enums/handMRT/tendinopathy/tendiopathy-finding-type.enum';
import { LocalizationDetailsTypeEnum } from '@enums/handMRT/tendinopathy/localization-details-type.enum';
import { RuptureTypeEnum } from '@enums/handMRT/tendinopathy/rupture-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/handMRT/tendinopathy/differential-diagnosis-type.enum';
import { DetailsTypeEnum } from '@enums/handMRT/tendinopathy/details-type.enum';
import { LocalizationTypeEnum } from '@enums/handMRT/tendinopathy/localization-type.enum';
import { TendonInvolvementTypeEnum } from '@enums/handMRT/tendinopathy/tendon-involvement-type.enum';
import { InternalStructureTypeEnum } from '@enums/handMRT/tendinopathy/internal-structure-type.enum';

export class TendinopathyFindingApiModel extends FindingBase {
  findingType: TendiopathyFindingTypeEnum;

  // Common
  pathologyType: PathologyTypeEnum;
  isWithTendonTear: boolean;
  tendovaginitisType: TendovaginitisTypeEnum;
  maxSize: number;
  ruptureType: RuptureTypeEnum;
  retraction: number;
  isPeritendinousChanges: boolean;
  isPeriTenosynovitis: boolean;
  isTearAtTheEnthesis: boolean;
  isPerifocalHematoma: boolean;
  isSuspected: boolean;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;

  // FlexorTendons
  isTendonsFlexorDigitorumSuperficialisMuscle: boolean;
  superficialisD2: boolean;
  superficialisD3: boolean;
  superficialisD4: boolean;
  superficialisD5: boolean;
  isTendonsFlexorDigitorumProfundusMuscle: boolean;
  profundusD2: boolean;
  profundusD3: boolean;
  profundusD4: boolean;
  profundusD5: boolean;
  isTendonFlexorPollicisLongusMuscle: boolean;
  isTendonFlexorCarpiRadialisMuscle: boolean;
  isTendonFlexorCarpiUlnarisMuscle: boolean;
  isStenosisInTheOsteofibrousCanal: boolean;

  // ExtensorTendons
  isTendonAbductorPollicisLongusMuscle: boolean;
  isTendonExtensorPollicisBrevisMuscle: boolean;
  isTendonExtensorCarpiRadialisLongusMuscle: boolean;
  isTendonExtensorCarpiRadialisBrevisMuscle: boolean;
  isTendonExtensorPollicisLongusMuscle: boolean;
  isTendonsExtensoresDigitorumAndIndicisMuscles: boolean;
  extensoresD2: boolean;
  extensoresD3: boolean;
  extensoresD4: boolean;
  extensoresD5: boolean;
  isTendonExtensorDigitiMinimiMuscle: boolean;
  isTendonExtensorCarpiUlnarisMuscle: boolean;
  detailsType: DetailsTypeEnum;

  // Ganglion
  localizationType: LocalizationTypeEnum;
  localizationDetailsType: LocalizationDetailsTypeEnum;
  size: number;
  secondPlane: number;
  thirdPlane: number;
  tendonInvolvementType: TendonInvolvementTypeEnum;
  signalTypeT1w: string;
  signalTypeT2w: string;
  internalStructureType: InternalStructureTypeEnum;

  constructor() {
    super();
    this.findingType = TendiopathyFindingTypeEnum.None;

    // Common
    this.pathologyType = PathologyTypeEnum.None;
    this.isWithTendonTear = false;
    this.tendovaginitisType = TendovaginitisTypeEnum.None;
    this.maxSize = null;
    this.ruptureType = RuptureTypeEnum.None;
    this.retraction = null;
    this.isPeritendinousChanges = false;
    this.isPeriTenosynovitis = false;
    this.isTearAtTheEnthesis = false;
    this.isPerifocalHematoma = false;
    this.isSuspected = false;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;

    // FlexorTendons
    this.isTendonsFlexorDigitorumSuperficialisMuscle = false;
    this.superficialisD2 = false;
    this.superficialisD3 = false;
    this.superficialisD4 = false;
    this.superficialisD5 = false;
    this.isTendonsFlexorDigitorumProfundusMuscle = false;
    this.profundusD2 = false;
    this.profundusD3 = false;
    this.profundusD4 = false;
    this.profundusD5 = false;
    this.isTendonFlexorPollicisLongusMuscle = false;
    this.isTendonFlexorCarpiRadialisMuscle = false;
    this.isTendonFlexorCarpiUlnarisMuscle = false;
    this.isStenosisInTheOsteofibrousCanal = false;

    // ExtensorTendons
    this.isTendonAbductorPollicisLongusMuscle = false;
    this.isTendonExtensorPollicisBrevisMuscle = false;
    this.isTendonExtensorCarpiRadialisLongusMuscle = false;
    this.isTendonExtensorCarpiRadialisBrevisMuscle = false;
    this.isTendonExtensorPollicisLongusMuscle = false;
    this.isTendonsExtensoresDigitorumAndIndicisMuscles = false;
    this.extensoresD2 = false;
    this.extensoresD3 = false;
    this.extensoresD4 = false;
    this.extensoresD5 = false;
    this.isTendonExtensorDigitiMinimiMuscle = false;
    this.isTendonExtensorCarpiUlnarisMuscle = false;
    this.detailsType = DetailsTypeEnum.None;

    // Ganglion
    this.localizationType = LocalizationTypeEnum.None;
    this.localizationDetailsType = LocalizationDetailsTypeEnum.None;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.tendonInvolvementType = TendonInvolvementTypeEnum.None;
    this.signalTypeT1w = 'None';
    this.signalTypeT2w = 'None';
    this.internalStructureType = InternalStructureTypeEnum.None;
  }
}
