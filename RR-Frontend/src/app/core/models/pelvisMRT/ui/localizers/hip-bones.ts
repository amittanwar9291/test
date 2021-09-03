import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class HipBones extends EnumBase {
  rightOsIlium: boolean;
  rightOsPubis: boolean;
  rightOsIschium: boolean;
  rightAcetabulum: boolean;
  rightFemoralHead: boolean;
  rightFemoralNeck: boolean;
  rightFemoralShaft: boolean;

  leftOsIlium: boolean;
  leftOsPubis: boolean;
  leftOsIschium: boolean;
  leftAcetabulum: boolean;
  leftFemoralHead: boolean;
  leftFemoralNeck: boolean;
  leftFemoralShaft: boolean;

  constructor() {
    super();

    this.rightOsIlium = false;
    this.rightOsPubis = false;
    this.rightOsIschium = false;
    this.rightAcetabulum = false;
    this.rightFemoralHead = false;
    this.rightFemoralNeck = false;
    this.rightFemoralShaft = false;

    this.leftOsIlium = false;
    this.leftOsPubis = false;
    this.leftOsIschium = false;
    this.leftAcetabulum = false;
    this.leftFemoralHead = false;
    this.leftFemoralNeck = false;
    this.leftFemoralShaft = false;
  }
}
