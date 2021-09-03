import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class AscitesTypeModel extends EnumBase {
  t1wSignalBoost: boolean;
  hemosiderin: boolean;
  focus: boolean;
  generalized: boolean;
  constructor() {
    super();
    this.t1wSignalBoost = false;
    this.hemosiderin = false;
    this.focus = false;
    this.generalized = false;
  }
}
