import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class DigitusSubTypeModel extends EnumBase {
  mCPD1: boolean;
  mCPD2: boolean;
  mCPD3: boolean;
  mCPD4: boolean;
  mCPD5: boolean;
  iP: boolean;
  pIPD2: boolean;
  pIPD3: boolean;
  pIPD4: boolean;
  pIPD5: boolean;
  dIPD2: boolean;
  dIPD3: boolean;
  dIPD4: boolean;
  dIPD5: boolean;

  constructor() {
    super();

    this.mCPD1 = false;
    this.mCPD2 = false;
    this.mCPD3 = false;
    this.mCPD4 = false;
    this.mCPD5 = false;
    this.iP = false;
    this.pIPD2 = false;
    this.pIPD3 = false;
    this.pIPD4 = false;
    this.pIPD5 = false;
    this.dIPD2 = false;
    this.dIPD3 = false;
    this.dIPD4 = false;
    this.dIPD5 = false;
  }
}
