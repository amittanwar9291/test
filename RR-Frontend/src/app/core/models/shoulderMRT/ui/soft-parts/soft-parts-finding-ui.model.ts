import { FindingBase } from '@models/shared/finding/finding.base';
import { MusculatureUiModel } from './musculature-ui.model';

import {
  SoftPartsFindingTypeEnum,
  LymphNodesAxillaryTypeEnum,
  SternoclavicularJointTypeEnum,
  PleuraTypeEnum,
  LocationTypeEnum,
  DeltoideusLocationTypeEnum
} from '@enums/shoulderMRT/soft-parts';

export class SoftPartsFindingUiModel extends FindingBase {
  findingType: SoftPartsFindingTypeEnum;

  musculatureFindings: MusculatureUiModel[];

  // LymphNodes
  lymphNodesAxillaryType: LymphNodesAxillaryTypeEnum;
  largestTransverseDiameterInMm: number;

  // Musculature
  locationType: LocationTypeEnum;
  deltoideusLocationType: DeltoideusLocationTypeEnum;
  isMuscularHaematoma: boolean;
  isMuscleLesion: boolean;
  isOtherFindingsMusculature: boolean;

  // SternoclavicularJoint
  sternoclavicularJointType: SternoclavicularJointTypeEnum;
  isSclerosis: boolean;
  isSubchondralCysts: boolean;
  isArthrosisArticularEffusion: boolean;
  isErosions: boolean;
  isSynovitis: boolean;
  isInflammationArticularEffusion: boolean;
  isRuptureSternoclavicularLigament: boolean;
  isRuptureDiscusArticularis: boolean;

  // Pleura
  pleuraType: PleuraTypeEnum;

  constructor() {
    super();
    this.findingType = SoftPartsFindingTypeEnum.None;

    this.musculatureFindings = [new MusculatureUiModel()];

    // LymphNodes
    this.lymphNodesAxillaryType = LymphNodesAxillaryTypeEnum.None;
    this.largestTransverseDiameterInMm = null;

    // Musculature
    this.locationType = LocationTypeEnum.None;
    this.deltoideusLocationType = DeltoideusLocationTypeEnum.None;
    this.isMuscularHaematoma = false;
    this.isMuscleLesion = false;
    this.isOtherFindingsMusculature = false;

    // SternoclavicularJoint
    this.sternoclavicularJointType = SternoclavicularJointTypeEnum.None;
    this.isSclerosis = false;
    this.isSubchondralCysts = false;
    this.isArthrosisArticularEffusion = false;
    this.isErosions = false;
    this.isSynovitis = false;
    this.isInflammationArticularEffusion = false;
    this.isRuptureSternoclavicularLigament = false;
    this.isRuptureDiscusArticularis = false;

    // Pleura
    this.pleuraType = PleuraTypeEnum.None;
  }
}
