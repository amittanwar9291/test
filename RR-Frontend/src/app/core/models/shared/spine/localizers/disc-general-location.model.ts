import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class DiscGeneralLocationModel extends EnumBase {
  ventral: boolean;
  dorsal: boolean;

  constructor() {
    super();
    this.ventral = false;
    this.dorsal = false;
  }
}
