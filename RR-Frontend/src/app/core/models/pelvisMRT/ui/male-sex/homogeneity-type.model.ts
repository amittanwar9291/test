import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class HomogeneityTypeModel extends EnumBase {
  homogeneous: boolean;
  heterogeneous: boolean;

  constructor() {
    super();
    this.homogeneous = false;
    this.heterogeneous = false;
  }
}
