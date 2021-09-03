import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastLocation extends EnumBase {
  right: boolean;
  left: boolean;
  rightTopOuter: boolean;
  rightTopInner: boolean;
  rightBottomOuter: boolean;
  rightBottomInner: boolean;
  leftTopOuter: boolean;
  leftTopInner: boolean;
  leftBottomOuter: boolean;
  leftBottomInner: boolean;
  rightTop: boolean;
  rightBottom: boolean;
  outerRight: boolean;
  innerRight: boolean;
  leftTop: boolean;
  leftBottom: boolean;
  innerLeft: boolean;
  outerLeft: boolean;
  rightRing: boolean;
  rightMiddle: boolean;
  leftRing: boolean;
  leftMiddle: boolean;
  rightShoulder: boolean;
  leftShoulder: boolean;

  constructor() {
    super();

    this.right = false;
    this.left = false;
    this.rightTopOuter = false;
    this.rightTopInner = false;
    this.rightBottomOuter = false;
    this.rightBottomInner = false;
    this.leftTopOuter = false;
    this.leftTopInner = false;
    this.leftBottomOuter = false;
    this.leftBottomInner = false;
    this.rightTop = false;
    this.rightBottom = false;
    this.outerRight = false;
    this.innerRight = false;
    this.leftTop = false;
    this.leftBottom = false;
    this.innerLeft = false;
    this.outerLeft = false;
    this.rightRing = false;
    this.rightMiddle = false;
    this.leftRing = false;
    this.leftMiddle = false;
    this.rightShoulder = false;
    this.leftShoulder = false;
  }
}
