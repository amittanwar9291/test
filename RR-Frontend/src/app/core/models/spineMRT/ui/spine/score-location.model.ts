import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class ScoreLocationModel extends EnumBase {
  right1: boolean;
  right2: boolean;
  right3: boolean;
  right4: boolean;
  left1: boolean;
  left2: boolean;
  left3: boolean;
  left4: boolean;

  constructor() {
    super();
    this.right1 = false;
    this.right2 = false;
    this.right3 = false;
    this.right4 = false;
    this.left1 = false;
    this.left2 = false;
    this.left3 = false;
    this.left4 = false;
  }
}
