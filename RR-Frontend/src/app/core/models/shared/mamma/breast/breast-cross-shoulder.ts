import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastCrossShoulder extends EnumBase {
  rightTopOuter: boolean;
  rightTopInner: boolean;
  rightBottomOuter: boolean;
  rightBottomInner: boolean;
  rightShoulder: boolean;
  leftTopInner: boolean;
  leftTopOuter: boolean;
  leftBottomInner: boolean;
  leftBottomOuter: boolean;
  leftShoulder: boolean;

  constructor() {
    super();

    this.rightTopOuter = false;
    this.rightTopInner = false;
    this.rightBottomOuter = false;
    this.rightBottomInner = false;
    this.rightShoulder = false;
    this.leftTopInner = false;
    this.leftTopOuter = false;
    this.leftBottomInner = false;
    this.leftBottomOuter = false;
    this.leftShoulder = false;
  }
}
