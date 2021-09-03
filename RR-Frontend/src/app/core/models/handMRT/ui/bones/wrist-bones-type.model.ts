import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class WristBonesTypeModel extends EnumBase {
  scaphoid: boolean;
  osLunatum: boolean;
  osTriquetrum: boolean;
  osPisiforme: boolean;
  osTrapezium: boolean;
  trapezoidBone: boolean;
  ocapitatum: boolean;
  osHamatum: boolean;
  constructor() {
    super();
    this.scaphoid = false;
    this.osLunatum = false;
    this.osTriquetrum = false;
    this.osPisiforme = false;
    this.osTrapezium = false;
    this.trapezoidBone = false;
    this.ocapitatum = false;
    this.osHamatum = false;
  }
}
