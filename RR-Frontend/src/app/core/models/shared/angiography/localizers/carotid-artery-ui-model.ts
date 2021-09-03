import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CarotidArteryUiModel extends EnumBase {
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
  c5: boolean;
  c6: boolean;
  c7: boolean;

  constructor() {
    super();
    this.c1 = false;
    this.c2 = false;
    this.c3 = false;
    this.c4 = false;
    this.c5 = false;
    this.c6 = false;
    this.c7 = false;
  }
}
