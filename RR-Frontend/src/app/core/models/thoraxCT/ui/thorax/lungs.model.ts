import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LungsModel extends EnumBase {
  truncusPulmonalis: boolean;
  aPulmonalisDextra: boolean;
  rightS1: boolean;
  rightS2: boolean;
  rightS3: boolean;
  rightTruncusAnterior: boolean;
  rightInterlobarArtery: boolean;
  rightS4: boolean;
  rightS5: boolean;
  rightS6: boolean;
  rightS7: boolean;
  rightS8: boolean;
  rightS9: boolean;
  rightS10: boolean;

  aPulmonalisSinistra: boolean;
  leftS1OrS2: boolean;
  leftS3: boolean;
  leftS4: boolean;
  leftS5: boolean;
  leftS6: boolean;
  leftS8: boolean;
  leftS9: boolean;
  leftS10: boolean;

  constructor() {
    super();

    this.truncusPulmonalis = false;
    this.aPulmonalisDextra = false;
    this.rightS1 = false;
    this.rightS2 = false;
    this.rightS3 = false;
    this.rightTruncusAnterior = false;
    this.rightInterlobarArtery = false;
    this.rightS4 = false;
    this.rightS5 = false;
    this.rightS6 = false;
    this.rightS7 = false;
    this.rightS8 = false;
    this.rightS9 = false;
    this.rightS10 = false;

    this.aPulmonalisSinistra = false;
    this.leftS1OrS2 = false;
    this.leftS3 = false;
    this.leftS4 = false;
    this.leftS5 = false;
    this.leftS6 = false;
    this.leftS8 = false;
    this.leftS9 = false;
    this.leftS10 = false;
  }
}
