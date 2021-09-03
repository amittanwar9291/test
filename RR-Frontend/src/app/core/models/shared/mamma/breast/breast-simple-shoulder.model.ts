import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastSimpleShoulder extends EnumBase {
  left: boolean;
  leftShoulder: boolean;
  right: boolean;
  rightShoulder: boolean;
  constructor() {
    super();

    this.left = false;
    this.leftShoulder = false;
    this.right = false;
    this.rightShoulder = false;
  }
}
