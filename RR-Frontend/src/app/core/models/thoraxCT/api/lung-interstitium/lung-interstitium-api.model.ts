import { ReportModelBase } from '@models/report-model-base';
import { LungInterstitiumFindingApiModel } from './lung-interstitium-finding-api.model';
import {
  CauseTypeEnum,
  ClassificationTypeEnum,
  DifferentialDiagnosisDetailsTypeEnum,
  DominantPatternTypeEnum,
  IIPHRCTPatternTypeEnum,
  LocalizationAxialTypeEnum,
  LungInterstitiumAreFindingsEnum,
  LungInterstitiumLocalizationCraniocaudalTypeEnum,
  LungInterstitiumDiagnosisTypeEnum,
  SideComparisonTypeEnum,
  SarcoidosisTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class LungInterstitiumApiModel extends ReportModelBase {
  areFindings: LungInterstitiumAreFindingsEnum;
  descriptionType: DescriptionTypeEnum;
  differentialDiagnosis: LungInterstitiumDiagnosisTypeEnum;
  dominantPatternType: DominantPatternTypeEnum;
  localizationCraniocaudalType: LungInterstitiumLocalizationCraniocaudalTypeEnum;
  lungsFlapsLocation: string;
  localizationAxialType: LocalizationAxialTypeEnum;
  sideComparisonType: SideComparisonTypeEnum;
  asymmetricalType: LocationTypeEnum;
  findings: LungInterstitiumFindingApiModel[];
  differentialDiagnosis1: LungInterstitiumDiagnosisTypeEnum;
  isSuspected: boolean;
  differentialDiagnosis2: LungInterstitiumDiagnosisTypeEnum;
  isSubordinated: boolean;
  differentialDiagnosis3: LungInterstitiumDiagnosisTypeEnum;
  causeType1: CauseTypeEnum;
  causeType2: CauseTypeEnum;
  causeType3: CauseTypeEnum;
  iiphrctPatternType1: IIPHRCTPatternTypeEnum;
  iiphrctPatternType2: IIPHRCTPatternTypeEnum;
  iiphrctPatternType3: IIPHRCTPatternTypeEnum;
  classificationType1: ClassificationTypeEnum;
  classificationType2: ClassificationTypeEnum;
  classificationType3: ClassificationTypeEnum;
  differentialDiagnosisDetailsType1: DifferentialDiagnosisDetailsTypeEnum;
  differentialDiagnosisDetailsType2: DifferentialDiagnosisDetailsTypeEnum;
  differentialDiagnosisDetailsType3: DifferentialDiagnosisDetailsTypeEnum;
  sarcoidosisType1: SarcoidosisTypeEnum;
  sarcoidosisType2: SarcoidosisTypeEnum;
  sarcoidosisType3: SarcoidosisTypeEnum;
  isBronchiolitisObliterans: boolean;

  constructor() {
    super();
    this.areFindings = LungInterstitiumAreFindingsEnum.None;
    this.descriptionType = DescriptionTypeEnum.None;
    this.differentialDiagnosis = LungInterstitiumDiagnosisTypeEnum.None;
    this.dominantPatternType = DominantPatternTypeEnum.None;
    this.localizationCraniocaudalType = LungInterstitiumLocalizationCraniocaudalTypeEnum.None;
    this.lungsFlapsLocation = 'None';
    this.localizationAxialType = LocalizationAxialTypeEnum.None;
    this.sideComparisonType = SideComparisonTypeEnum.None;
    this.asymmetricalType = LocationTypeEnum.None;
    this.findings = [];
    this.differentialDiagnosis1 = LungInterstitiumDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.differentialDiagnosis2 = LungInterstitiumDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.differentialDiagnosis3 = LungInterstitiumDiagnosisTypeEnum.None;
    this.causeType1 = CauseTypeEnum.None;
    this.causeType2 = CauseTypeEnum.None;
    this.causeType3 = CauseTypeEnum.None;
    this.iiphrctPatternType1 = IIPHRCTPatternTypeEnum.None;
    this.iiphrctPatternType2 = IIPHRCTPatternTypeEnum.None;
    this.iiphrctPatternType3 = IIPHRCTPatternTypeEnum.None;
    this.classificationType1 = ClassificationTypeEnum.None;
    this.classificationType2 = ClassificationTypeEnum.None;
    this.classificationType3 = ClassificationTypeEnum.None;
    this.differentialDiagnosisDetailsType1 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.differentialDiagnosisDetailsType2 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.differentialDiagnosisDetailsType3 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.sarcoidosisType1 = SarcoidosisTypeEnum.None;
    this.sarcoidosisType2 = SarcoidosisTypeEnum.None;
    this.sarcoidosisType3 = SarcoidosisTypeEnum.None;
    this.isBronchiolitisObliterans = false;
  }
}
