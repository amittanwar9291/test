import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class SpinalCanalLocation extends EnumBase {
  intramedullary: boolean;
  extramedullary: boolean;
  epidural: boolean;
  extradural: boolean;

  constructor() {
    super();
    this.intramedullary = false;
    this.extramedullary = false;
    this.epidural = false;
    this.extradural = false;
  }
}
