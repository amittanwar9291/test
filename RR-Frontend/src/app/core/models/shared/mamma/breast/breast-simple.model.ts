import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastSimple extends EnumBase {
  right: boolean;
  left: boolean;

  constructor() {
    super();

    this.right = false;
    this.left = false;
  }
}
