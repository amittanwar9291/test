import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class MorphologyType extends EnumBase {
  t1wHypointens: boolean;
  t2wHyointens: boolean;
  kMEnhancement: boolean;
  boneErosions: boolean;
  constructor() {
    super();
    this.t1wHypointens = false;
    this.t2wHyointens = false;
    this.kMEnhancement = false;
    this.boneErosions = false;
  }
}
