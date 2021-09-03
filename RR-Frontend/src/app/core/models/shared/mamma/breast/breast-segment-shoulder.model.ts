import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastSegmentShoulder extends EnumBase {
  rightMiddle: boolean;
  rightRing: boolean;
  rightShoulder: boolean;
  rightTopOuter: boolean;
  rightTopInner: boolean;
  rightBottomOuter: boolean;
  rightBottomInner: boolean;
  leftMiddle: boolean;
  leftRing: boolean;
  leftShoulder: boolean;
  leftTopInner: boolean;
  leftTopOuter: boolean;
  leftBottomInner: boolean;
  leftBottomOuter: boolean;

  constructor() {
    super();

    this.rightMiddle = false;
    this.rightRing = false;
    this.rightShoulder = false;
    this.rightTopOuter = false;
    this.rightTopInner = false;
    this.rightBottomOuter = false;
    this.rightBottomInner = false;
    this.leftMiddle = false;
    this.leftRing = false;
    this.leftShoulder = false;
    this.leftTopInner = false;
    this.leftTopOuter = false;
    this.leftBottomInner = false;
    this.leftBottomOuter = false;
  }
}
