import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class AorticArch extends EnumBase {
  aorticRoot: boolean;
  ascendingAorta: boolean;
  aorticArch: boolean;
  descendingAorta: boolean;
  suprarenalAbdominalAorta: boolean;
  infrarenalAbdominalAorta: boolean;
  rightCommonIliacArtery: boolean;
  leftCommonIliacArtery: boolean;
  rightExternalIliacArtery: boolean;
  leftExternalIliacArtery: boolean;

  arcusAortaeBetweenTruncusAndCarotis: boolean;
  arcusAortaeBetweenCarotisAndSubclavia: boolean;

  constructor() {
    super();
    this.aorticRoot = false;
    this.ascendingAorta = false;
    this.aorticArch = false;
    this.descendingAorta = false;
    this.suprarenalAbdominalAorta = false;
    this.infrarenalAbdominalAorta = false;
    this.rightCommonIliacArtery = false;
    this.leftCommonIliacArtery = false;
    this.rightExternalIliacArtery = false;
    this.leftExternalIliacArtery = false;

    this.arcusAortaeBetweenTruncusAndCarotis = false;
    this.arcusAortaeBetweenCarotisAndSubclavia = false;
  }
}
