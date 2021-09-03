import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class OneCrossSection extends EnumBase {
  cZLeft: boolean;
  cZRight: boolean;

  constructor() {
    super();
    this.cZLeft = false;
    this.cZRight = false;
  }
}
