import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class SpineDiscLocationModel extends EnumBase {
  central: boolean;
  paracentralRight: boolean;
  subarticularRight: boolean;
  foraminalRight: boolean;
  extraforaminalRight: boolean;
  paracentralLeft: boolean;
  subarticularLeft: boolean;
  foraminalLeft: boolean;
  extraforaminalLeft: boolean;

  constructor() {
    super();
    this.central = false;
    this.paracentralRight = false;
    this.subarticularRight = false;
    this.foraminalRight = false;
    this.extraforaminalRight = false;
    this.paracentralLeft = false;
    this.subarticularLeft = false;
    this.foraminalLeft = false;
    this.extraforaminalLeft = false;
  }
}
