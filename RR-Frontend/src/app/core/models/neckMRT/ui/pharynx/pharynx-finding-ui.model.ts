import { PharynxFindingBaseUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-base-ui.model';
import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  DifferentialDiagnosisTypeEnum,
  OrientationAxialTypeEnum,
  ProvenHistologyTypeEnum,
  AnatomicVariantTypeEnum,
  CleftLipAndPalateTypeEnum,
  GradingTypeEnum
} from '@enums/neckMRT/pharynx';

export class PharynxFindingUiModel extends PharynxFindingBaseUiModel {
  // Common
  referencePicture: ReferencePictureUiModel;

  // AnatomicVariantDysplasia
  anatomicVariantType: AnatomicVariantTypeEnum;
  gradingType: GradingTypeEnum;
  isChoanalAtresiaRight: boolean;
  isChoanalAtresiaLeft: boolean;
  cleftLipAndPalateType: CleftLipAndPalateTypeEnum;
  isCleftLipAndPalateRight: boolean;
  isCleftLipAndPalateLeft: boolean;
  isZenkerSDiverticulum: boolean;
  isFat: boolean;
  isMacroscopic: boolean;
  isMicroscopic: boolean;
  isCysticChange: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  provenHistologyType: ProvenHistologyTypeEnum;
  isProvenHistology: boolean;
  orientationAxialType: OrientationAxialTypeEnum;

  isPharyngealMucosalSpacePms: boolean;
  isParapharyngealSpacePps: boolean;
  isMasticatorSpaceMs: boolean;
  isBuccalSpaceBs: boolean;
  isParotidSpacePs: boolean;
  isCarotidSpaceCs: boolean;
  isRetropharyngealSpaceRpsAndDangerSpace: boolean;
  isPerivertebralSpacePvsPrevertebral: boolean;
  isPerivertebralSpacePvsParaspinal: boolean;
  isVisceralSpaceVs: boolean;
  isAnteriorCervicalSpaceAcs: boolean;
  isPosteriorCervicalSpacePcs: boolean;
  isOralMucosalSpaceOms: boolean;
  isSublingualSpaceSls: boolean;
  isSubmandibularSpaceSms: boolean;
  isRootOfTheTongueRot: boolean;
  isFasciaSpacesLingualTonsils: boolean;
  isFasciaSpacesValleculae: boolean;
  isTransspatialGrowth: boolean;
  sizeInMm: number;
  secondPlaneInMm: number;
  thirdPlaneInMm: number;
  differentialDiagnosis1: DifferentialDiagnosisTypeEnum;
  isSuspicionOf: boolean;
  differentialDiagnosis2: DifferentialDiagnosisTypeEnum;
  isSubordinate: boolean;

  constructor() {
    super();

    // Common
    this.referencePicture = new ReferencePictureUiModel();

    // AnatomicVariantDysplasia
    this.anatomicVariantType = AnatomicVariantTypeEnum.None;
    this.gradingType = GradingTypeEnum.None;
    this.isChoanalAtresiaRight = false;
    this.isChoanalAtresiaLeft = false;
    this.cleftLipAndPalateType = CleftLipAndPalateTypeEnum.None;
    this.isCleftLipAndPalateRight = false;
    this.isCleftLipAndPalateLeft = false;
    this.isZenkerSDiverticulum = false;
    this.isFat = false;
    this.isMacroscopic = false;
    this.isMicroscopic = false;
    this.isCysticChange = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.provenHistologyType = ProvenHistologyTypeEnum.None;
    this.isProvenHistology = false;
    this.orientationAxialType = OrientationAxialTypeEnum.None;

    this.isPharyngealMucosalSpacePms = false;
    this.isParapharyngealSpacePps = false;
    this.isMasticatorSpaceMs = false;
    this.isBuccalSpaceBs = false;
    this.isParotidSpacePs = false;
    this.isCarotidSpaceCs = false;
    this.isRetropharyngealSpaceRpsAndDangerSpace = false;
    this.isPerivertebralSpacePvsPrevertebral = false;
    this.isPerivertebralSpacePvsParaspinal = false;
    this.isVisceralSpaceVs = false;
    this.isAnteriorCervicalSpaceAcs = false;
    this.isPosteriorCervicalSpacePcs = false;
    this.isOralMucosalSpaceOms = false;
    this.isSublingualSpaceSls = false;
    this.isSubmandibularSpaceSms = false;
    this.isRootOfTheTongueRot = false;
    this.isFasciaSpacesLingualTonsils = false;
    this.isFasciaSpacesValleculae = false;
    this.isTransspatialGrowth = false;
    this.sizeInMm = null;
    this.secondPlaneInMm = null;
    this.thirdPlaneInMm = null;
    this.differentialDiagnosis1 = DifferentialDiagnosisTypeEnum.None;
    this.isSuspicionOf = false;
    this.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.isSubordinate = false;
  }
}
