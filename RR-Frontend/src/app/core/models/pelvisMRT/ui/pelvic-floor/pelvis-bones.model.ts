import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class PelvisBonesModel extends EnumBase {
  rightOsIlium: boolean;
  leftOsIlium: boolean;

  rightOsPubis: boolean;
  leftOsPubis: boolean;

  rightOsIschium: boolean;
  leftOsIschium: boolean;

  rightAcetabulum: boolean;
  leftAcetabulum: boolean;

  rightFemoralHead: boolean;
  leftFemoralHead: boolean;

  rightFemoralNeck: boolean;
  leftFemoralNeck: boolean;

  rightFemoralShaft: boolean;
  leftFemoralShaft: boolean;

  constructor() {
    super();

    this.rightOsIlium = false;
    this.leftOsIlium = false;

    this.rightOsPubis = false;
    this.leftOsPubis = false;

    this.rightOsIschium = false;
    this.leftOsIschium = false;

    this.rightAcetabulum = false;
    this.leftAcetabulum = false;

    this.rightFemoralHead = false;
    this.leftFemoralHead = false;

    this.rightFemoralNeck = false;
    this.leftFemoralNeck = false;

    this.rightFemoralShaft = false;
    this.leftFemoralShaft = false;
  }
}
