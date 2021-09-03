import { FindingBase } from '@models/shared/finding/finding.base';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

import {
  JointAndBursaeFindingType,
  JointAndBursaePathologyType,
  InsertionAnteriorType,
  ArticularEffusionType
} from '@enums/shoulderMRT/joint';

export class JointFindingApiModel extends FindingBase {
  findingType: JointAndBursaeFindingType;

  // Capsule
  pathologyType: JointAndBursaePathologyType;
  isThickeningJointCapsule: boolean;
  isThickeningLigCoracohumeraleMoreThan3: boolean;
  isPericapsularEdema: boolean;
  isEdemaAroundRotatorInterval: boolean;
  isIncreasedCAEnhancementByRotator: boolean;
  isIncreasedCAEnhancementOfTheCapsule: boolean;
  isObliterationOfTheTriangular: boolean;
  isProliferations: boolean;
  isInsertionAnteriorJointCapsule: boolean;
  insertionPosteriorType: InsertionAnteriorType;

  // ArticularEffusion
  articularEffusionType: ArticularEffusionType;

  // Bursitis
  isBursitisSubacromial: boolean;
  isBursitisSubdeltoide: boolean;
  isBursitisSubscapular: boolean;
  isSubcoracoid: boolean;

  // FreeJointBody
  diameterInMm: number;
  serialNumber: string;
  pictureNumber: string;
  uploadedImageFile: FileApiModel;
  imageFileId: string;

  constructor() {
    super();

    // Capsule
    this.findingType = JointAndBursaeFindingType.None;
    this.pathologyType = JointAndBursaePathologyType.None;
    this.isThickeningJointCapsule = false;
    this.isThickeningLigCoracohumeraleMoreThan3 = false;
    this.isPericapsularEdema = false;
    this.isEdemaAroundRotatorInterval = false;
    this.isIncreasedCAEnhancementByRotator = false;
    this.isIncreasedCAEnhancementOfTheCapsule = false;
    this.isObliterationOfTheTriangular = false;
    this.isProliferations = false;
    this.isInsertionAnteriorJointCapsule = false;
    this.insertionPosteriorType = InsertionAnteriorType.None;

    // ArticularEffusion
    this.articularEffusionType = ArticularEffusionType.None;

    // Bursitis
    this.isBursitisSubacromial = false;
    this.isBursitisSubdeltoide = false;
    this.isBursitisSubscapular = false;
    this.isSubcoracoid = false;

    // FreeJointBody
    this.diameterInMm = null;
    this.serialNumber = '';
    this.pictureNumber = '';
    this.uploadedImageFile = null;
    this.imageFileId = null;
  }
}
