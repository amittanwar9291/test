import { ModelBase } from '@models/model-base';

export class SacroiliacJointScoreApiModel extends ModelBase {
  scoreLocation: string;
  isManifestationRight: boolean;
  isManifestationLeft: boolean;
  isSTIRRight: boolean;
  isSTIRLeft: boolean;
  constructor() {
    super();
    this.scoreLocation = 'None';
    this.isManifestationRight = false;
    this.isManifestationLeft = false;
    this.isSTIRRight = false;
    this.isSTIRLeft = false;
  }
}
