import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class DigitusTypeModel extends EnumBase {
  digitusD1: boolean;
  digitusD2: boolean;
  digitusD3: boolean;
  digitusD4: boolean;
  digitusD5: boolean;

  constructor() {
    super();

    this.digitusD1 = false;
    this.digitusD2 = false;
    this.digitusD3 = false;
    this.digitusD4 = false;
    this.digitusD5 = false;
  }
}
