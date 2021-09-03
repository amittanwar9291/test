import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class FibrolipomatousHamartomaLocalizationType extends EnumBase {
  nMedianus: boolean;
  macrodactyly: boolean;
  grease: boolean;
  spaghettilikeAppearanceOfThe: boolean;
  expandedNerveFasciclesaxial: boolean;
  constructor() {
    super();
    this.nMedianus = false;
    this.macrodactyly = false;
    this.grease = false;
    this.spaghettilikeAppearanceOfThe = false;
    this.expandedNerveFasciclesaxial = false;
  }
}
