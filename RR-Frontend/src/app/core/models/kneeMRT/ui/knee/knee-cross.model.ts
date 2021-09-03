import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeCross extends EnumBase {
  aHLM: boolean;
  iPLM: boolean;
  pHLM: boolean;
  aHMM: boolean;
  iPMM: boolean;
  pHMM: boolean;

  constructor() {
    super();

    this.aHLM = false;
    this.iPLM = false;
    this.pHLM = false;
    this.aHMM = false;
    this.iPMM = false;
    this.pHMM = false;
  }
}
