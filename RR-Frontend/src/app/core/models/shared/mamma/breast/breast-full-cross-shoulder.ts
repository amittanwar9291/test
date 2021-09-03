import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastFullCrossShoulder extends EnumBase {
  rightTopOuter: boolean;
  rightTopInner: boolean;
  rightTop: boolean;
  rightBottomOuter: boolean;
  rightBottomInner: boolean;
  rightBottom: boolean;
  innerRight: boolean;
  outerRight: boolean;
  rightShoulder: boolean;
  rightMiddle: boolean;
  rightRing: boolean;
  leftTopInner: boolean;
  leftTopOuter: boolean;
  leftTop: boolean;
  leftBottomInner: boolean;
  leftBottomOuter: boolean;
  leftBottom: boolean;
  innerLeft: boolean;
  outerLeft: boolean;
  leftShoulder: boolean;
  leftMiddle: boolean;
  leftRing: boolean;

  constructor() {
    super();

    this.rightTopOuter = false;
    this.rightTopInner = false;
    this.rightTop = false;
    this.rightBottomOuter = false;
    this.rightBottomInner = false;
    this.rightBottom = false;
    this.innerRight = false;
    this.outerRight = false;
    this.rightShoulder = false;
    this.rightMiddle = false;
    this.rightRing = false;
    this.leftTopInner = false;
    this.leftTopOuter = false;
    this.leftTop = false;
    this.leftBottomInner = false;
    this.leftBottomOuter = false;
    this.leftBottom = false;
    this.innerLeft = false;
    this.outerLeft = false;
    this.leftShoulder = false;
    this.leftMiddle = false;
    this.leftRing = false;
  }
}
