import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CarpalBonesRareTypeModel extends EnumBase {
  epitrapezium: boolean;
  trapezoidsSecundarium: boolean;
  gruberiOssicle: boolean;
  osHamuliProprium: boolean;
  vesalianum: boolean;
  externalUlna: boolean;
  parascaphoid: boolean;
  hypolunatum: boolean;
  epilunate: boolean;
  epipyramis: boolean;
  lunula: boolean;
  constructor() {
    super();
    this.epitrapezium = false;
    this.trapezoidsSecundarium = false;
    this.gruberiOssicle = false;
    this.osHamuliProprium = false;
    this.vesalianum = false;
    this.externalUlna = false;
    this.parascaphoid = false;
    this.hypolunatum = false;
    this.epilunate = false;
    this.epipyramis = false;
    this.lunula = false;
  }
}
