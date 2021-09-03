import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LungsFlapsModel extends EnumBase {
  rightOL: boolean;
  rightML: boolean;
  rightUL: boolean;
  leftOL: boolean;
  leftLI: boolean;
  leftUL: boolean;

  constructor() {
    super();

    this.rightOL = false;
    this.rightML = false;
    this.rightUL = false;
    this.leftOL = false;
    this.leftLI = false;
    this.leftUL = false;
  }
}
