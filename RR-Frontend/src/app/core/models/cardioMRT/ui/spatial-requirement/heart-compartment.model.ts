import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class HeartCompartment extends EnumBase {
  pER: boolean;
  rV: boolean;
  rA: boolean;
  lV: boolean;
  lA: boolean;

  constructor() {
    super();

    this.pER = false;
    this.rV = false;
    this.rA = false;
    this.lV = false;
    this.lA = false;
  }
}
