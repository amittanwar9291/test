import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class SoftTissueInternalChangeModel extends EnumBase {
  grease: boolean;
  cysts: boolean;
  calcification: boolean;
  capsule: boolean;
  septs: boolean;
  phlebolite: boolean;
  necroses: boolean;
  signalVoids: boolean;
  constructor() {
    super();
    this.grease = false;
    this.cysts = false;
    this.calcification = false;
    this.capsule = false;
    this.septs = false;
    this.phlebolite = false;
    this.necroses = false;
    this.signalVoids = false;
  }
}
