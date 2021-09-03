import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeCompartment extends EnumBase {
  aSU: boolean;
  aIN: boolean;
  pSU: boolean;
  pIN: boolean;

  constructor() {
    super();

    this.aSU = false;
    this.aIN = false;
    this.pSU = false;
    this.pIN = false;
  }
}
