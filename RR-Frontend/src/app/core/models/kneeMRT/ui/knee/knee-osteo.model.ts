import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeOsteo extends EnumBase {
  fEMCONLAT: boolean;
  fEMCONMED: boolean;
  tIBCONLAT: boolean;
  tIBEMIN: boolean;
  tIBCONMED: boolean;

  constructor() {
    super();

    this.fEMCONLAT = false;
    this.fEMCONMED = false;
    this.tIBCONLAT = false;
    this.tIBCONMED = false;
    this.tIBEMIN = false;
  }
}
