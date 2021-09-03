import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class Rectum extends EnumBase {
  anterior: boolean;
  leftLateral3OClock: boolean;
  posterior: boolean;
  rightLateral9OClock: boolean;

  constructor() {
    super();
    this.anterior = false;
    this.leftLateral3OClock = false;
    this.posterior = false;
    this.rightLateral9OClock = false;
  }
}
