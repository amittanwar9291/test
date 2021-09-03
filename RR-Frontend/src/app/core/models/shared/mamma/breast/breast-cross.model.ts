import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class BreastCross extends EnumBase {
  rightTopOuter: boolean;
  rightTopInner: boolean;
  rightBottomOuter: boolean;
  rightBottomInner: boolean;
  leftTopInner: boolean;
  leftTopOuter: boolean;
  leftBottomInner: boolean;
  leftBottomOuter: boolean;

  constructor() {
    super();

    this.rightTopOuter = false;
    this.rightTopInner = false;
    this.rightBottomOuter = false;
    this.rightBottomInner = false;
    this.leftTopInner = false;
    this.leftTopOuter = false;
    this.leftBottomInner = false;
    this.leftBottomOuter = false;
  }
}
