import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class DirectionTypeModel extends EnumBase {
  left: boolean;
  right: boolean;
  constructor() {
    super();
    this.left = false;
    this.right = false;
  }
}
