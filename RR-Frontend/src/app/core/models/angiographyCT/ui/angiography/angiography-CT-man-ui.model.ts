import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class AngiographyCTManUiModel extends EnumBase {
  supraaorticVessels: boolean;
  arteriesOfTheRightUpperLimb: boolean;
  arteriesOfTheLeftUpperLimb: boolean;
  aorta: boolean;
  abdomen: boolean;
  arteriesOfPelvisAndLowerLimbs: boolean;
  coronaryArteries: boolean;

  constructor() {
    super();
    this.supraaorticVessels = false;
    this.arteriesOfTheRightUpperLimb = false;
    this.arteriesOfTheLeftUpperLimb = false;
    this.aorta = false;
    this.abdomen = false;
    this.arteriesOfPelvisAndLowerLimbs = false;
    this.coronaryArteries = false;
  }
}
