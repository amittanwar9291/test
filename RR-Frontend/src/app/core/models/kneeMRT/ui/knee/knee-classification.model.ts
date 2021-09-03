import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeClassification extends EnumBase {
  normal: boolean;
  grade1: boolean;
  grade2a: boolean;
  grade2b: boolean;
  grade2c: boolean;
  grade3: boolean;

  constructor() {
    super();

    this.normal = false;
    this.grade1 = false;
    this.grade2a = false;
    this.grade2b = false;
    this.grade2c = false;
    this.grade3 = false;
  }
}
