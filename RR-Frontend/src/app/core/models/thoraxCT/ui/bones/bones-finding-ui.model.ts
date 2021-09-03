import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { BonesDifferentialDiagnosisTypeEnum } from '@enums/thoraxCT/bones/bones-differential-diagnosis-type.enum';
import { ClaviculaeFractureTypeEnum } from '@enums/thoraxCT/bones/claviculae-fracture-type.enum';
import { MedialEndSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/medial-end-segment-claviculae-type.enum';
import { DiaphysealSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/diaphyseal-segment-claviculae-type.enum';
import { LateralEndSegmentClaviculaeTypeEnum } from '@enums/thoraxCT/bones/lateral-end-segment-claviculae-type.enum';
import { RockwoodTypeEnum } from '@enums/thoraxCT/bones/rockwood-type.enum';
import { TossyTypeEnum } from '@enums/thoraxCT/bones/tossy-type.enum';
import { ScapulaFractureTypeEnum } from '@enums/thoraxCT/bones/scapula-fracture-type.enum';
import { ProcessTypeEnum } from '@enums/thoraxCT/bones/process-type.enum';
import { BodyTypeEnum } from '@enums/thoraxCT/bones/body-type.enum';
import { GlenoidFossaTypeEnum } from '@enums/thoraxCT/bones/glenoid-fossa-type.enum';
import { RibFractureTypeEnum } from '@enums/thoraxCT/bones/rib-fracture-type.enum';
import { PosteriorSegmentTypeEnum } from '@enums/thoraxCT/bones/posterior-segment-type.enum';
import { ShankTypeEnum } from '@enums/thoraxCT/bones/shank-type.enum';
import { AnteriorEndSegmentTypeEnum } from '@enums/thoraxCT/bones/anterior-end-segment-type.enum';
import { SternumFractureTypeEnum } from '@enums/thoraxCT/bones/sternum-fracture-type.enum';
import { ManubriumTypeEnum } from '@enums/thoraxCT/bones/manubrium-type.enum';
import { BodySternumTypeEnum } from '@enums/thoraxCT/bones/body-sternum-type.enum';
import { XiphoidTypeEnum } from '@enums/thoraxCT/bones/xiphoid-type.enum';
import { FractureOfSpineTypeEnum } from '@enums/thoraxCT/bones/fracture-of-spine-type.enum';
import { CompressionInjuryTypeEnum } from '@enums/thoraxCT/bones/compression-injury-type.enum';
import { TensionBandInjuryTypeEnum } from '@enums/thoraxCT/bones/tension-band-injury-type.enum';
import { PathologyTypeEnum } from '@enums/thoraxCT/bones/pathology-type.enum';
import { NotFurtherDefinedClassificationTypeEnum } from '@enums/thoraxCT/bones/not-further-defined-classification-type.enum';
import { BonesFindingBaseUiModel } from '@models/thoraxCT/ui/bones/bones-finding-base-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class BonesFindingUiModel extends BonesFindingBaseUiModel {
  isFractureOlderRemodeled: boolean;
  ribLocation: RibsModel;
  descriptionType: DescriptionTypeEnum;
  vertebralColumnLocalization: SpineLocation;
  sideType: LocationTypeEnum;
  isAcute: boolean;
  isOlderRemodeled: boolean;
  notFurtherDefinedClassificationType: NotFurtherDefinedClassificationTypeEnum;
  bonesDifferentialDiagnosis1: BonesDifferentialDiagnosisTypeEnum;
  isSuspected: boolean;
  bonesDifferentialDiagnosis2: BonesDifferentialDiagnosisTypeEnum;
  isSubordinated: boolean;
  bonesDifferentialDiagnosis3: BonesDifferentialDiagnosisTypeEnum;
  isAOClassification: boolean;
  claviculaeFractureType: ClaviculaeFractureTypeEnum;
  medialEndSegmentClaviculaeType: MedialEndSegmentClaviculaeTypeEnum;
  diaphysealSegmentClaviculaeType: DiaphysealSegmentClaviculaeTypeEnum;
  lateralEndSegmentClaviculaeType: LateralEndSegmentClaviculaeTypeEnum;
  isRockwood: boolean;
  rockwoodType: RockwoodTypeEnum;
  isTossy: boolean;
  tossyType: TossyTypeEnum;
  scapulaFractureType: ScapulaFractureTypeEnum;
  processType: ProcessTypeEnum;
  bodyType: BodyTypeEnum;
  glenoidFossaType: GlenoidFossaTypeEnum;
  ribFractureType: RibFractureTypeEnum;
  posteriorSegmentType: PosteriorSegmentTypeEnum;
  shankType: ShankTypeEnum;
  anteriorEndSegmentType: AnteriorEndSegmentTypeEnum;
  sternumFractureType: SternumFractureTypeEnum;
  manubriumType: ManubriumTypeEnum;
  bodySternumType: BodySternumTypeEnum;
  xiphoidType: XiphoidTypeEnum;
  fractureOfSpineType: FractureOfSpineTypeEnum;
  compressionInjuryType: CompressionInjuryTypeEnum;
  tensionBandInjuryType: TensionBandInjuryTypeEnum;
  pathologyType: PathologyTypeEnum;
  isSchmorlNodes: boolean;
  isEndplateHerniation: boolean;
  vertebralBodyLocalization: DiscGeneralLocationModel;
  isManubrium: boolean;
  isCorpus: boolean;
  isXiphoidProcess: boolean;

  constructor() {
    super();
    this.ribLocation = new RibsModel();
    this.isFractureOlderRemodeled = false;
    this.descriptionType = DescriptionTypeEnum.None;
    this.vertebralColumnLocalization = new SpineLocation();
    this.isAcute = false;
    this.sideType = LocationTypeEnum.None;
    this.isOlderRemodeled = false;
    this.notFurtherDefinedClassificationType = NotFurtherDefinedClassificationTypeEnum.None;
    this.bonesDifferentialDiagnosis1 = BonesDifferentialDiagnosisTypeEnum.None;
    this.isSuspected = false;
    this.bonesDifferentialDiagnosis2 = BonesDifferentialDiagnosisTypeEnum.None;
    this.isSubordinated = false;
    this.bonesDifferentialDiagnosis3 = BonesDifferentialDiagnosisTypeEnum.None;
    this.isAOClassification = false;
    this.claviculaeFractureType = ClaviculaeFractureTypeEnum.None;
    this.medialEndSegmentClaviculaeType = MedialEndSegmentClaviculaeTypeEnum.None;
    this.diaphysealSegmentClaviculaeType = DiaphysealSegmentClaviculaeTypeEnum.None;
    this.lateralEndSegmentClaviculaeType = LateralEndSegmentClaviculaeTypeEnum.None;
    this.isRockwood = false;
    this.rockwoodType = RockwoodTypeEnum.None;
    this.isTossy = false;
    this.tossyType = TossyTypeEnum.None;
    this.scapulaFractureType = ScapulaFractureTypeEnum.None;
    this.processType = ProcessTypeEnum.None;
    this.bodyType = BodyTypeEnum.None;
    this.glenoidFossaType = GlenoidFossaTypeEnum.None;
    this.ribFractureType = RibFractureTypeEnum.None;
    this.posteriorSegmentType = PosteriorSegmentTypeEnum.None;
    this.shankType = ShankTypeEnum.None;
    this.anteriorEndSegmentType = AnteriorEndSegmentTypeEnum.None;
    this.sternumFractureType = SternumFractureTypeEnum.None;
    this.manubriumType = ManubriumTypeEnum.None;
    this.bodySternumType = BodySternumTypeEnum.None;
    this.xiphoidType = XiphoidTypeEnum.None;
    this.fractureOfSpineType = FractureOfSpineTypeEnum.None;
    this.compressionInjuryType = CompressionInjuryTypeEnum.None;
    this.tensionBandInjuryType = TensionBandInjuryTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.isSchmorlNodes = false;
    this.isEndplateHerniation = false;
    this.vertebralBodyLocalization = new DiscGeneralLocationModel();
    this.isManubrium = false;
    this.isCorpus = false;
    this.isXiphoidProcess = false;
  }
}