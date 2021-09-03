import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class HipGeneralUiModel extends EnumBase {
  left: boolean;
  right: boolean;
  both: boolean;

  constructor() {
    super();

    this.left = false;
    this.right = false;
    this.both = false;
  }
}
