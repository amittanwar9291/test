import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LymphNodes extends EnumBase {
  retroperitoneal: boolean;
  iliakaExternaLeft: boolean;
  iliakaCommunisRight: boolean;
  iliakaCommunisLeft: boolean;
  iliakaInternaRight: boolean;
  iliakaExternaRight: boolean;
  iliakaInternaLeft: boolean;
  obturatorGroupRight: boolean;
  obturatorGroupLeft: boolean;

  mesorectal: boolean;
  presacral: boolean;
  inguinalRight: boolean;
  parametric: boolean;
  perisigmoidal: boolean;
  inguinalLeft: boolean;
  pericecal: boolean;
  femoralisCommunisRight: boolean;
  femoralisCommunisLeft: boolean;

  constructor() {
    super();
    this.retroperitoneal = false;
    this.iliakaExternaLeft = false;
    this.iliakaCommunisRight = false;
    this.iliakaCommunisLeft = false;
    this.iliakaInternaRight = false;
    this.iliakaExternaRight = false;
    this.iliakaInternaLeft = false;
    this.obturatorGroupRight = false;
    this.obturatorGroupLeft = false;

    this.mesorectal = false;
    this.presacral = false;
    this.inguinalRight = false;
    this.parametric = false;
    this.perisigmoidal = false;
    this.inguinalLeft = false;
    this.pericecal = false;
    this.femoralisCommunisRight = false;
    this.femoralisCommunisLeft = false;
  }
}
